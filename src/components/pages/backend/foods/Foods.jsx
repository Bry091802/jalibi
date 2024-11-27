import { Plus } from 'lucide-react'
import React from 'react'
import SideNavigation from '../partials/SideNavigation'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import SearchBar from '../partials/SearchBar'
import { StoreContext } from '@/components/store/storeContext'
import { setIsAdd } from '@/components/store/storeAction'
import ToastSucess from '../partials/ToastSucess'
import ModalError from '../partials/modals/ModalError'
import ModalValidation from '../partials/modals/ModalValidation'
import FoodsTable from './FoodsTable'
import ModalAddFoods from './ModalAddFoods'

const Foods = () => {
    const {dispatch, store} = React.useContext(StoreContext);
    const [itemEdit, setitemEdit] =  React.useState(null);

const handleAdd = () => {
    dispatch(setIsAdd(true));
    setitemEdit(null);
};
  return (
    <>
        <section className="layout-main">
            <div className="layout-div">
                    <SideNavigation menu="foods"/>
                <main>

                    <Header title="Foods" subtitle="Manage List of Foods"/>
                    <div className="p-8">
                        <div className="flex justify-between items-center">
                            <SearchBar/>
                            <button className="btn btn-add" onClick={handleAdd}>
                            <Plus size={16}/>Add New    
                            </button>
                        </div>
                        <FoodsTable setitemEdit={setitemEdit}/>
                    </div>

                        <Footer />
                </main>
            </div>
        </section>
        {store.validate && <ModalValidation/>}
        {store.error && <ModalError/>}
        {store.success && <ToastSucess/>}
        
         {store.isAdd && <ModalAddFoods itemEdit={itemEdit}/>}
    </>
  )
}

export default Foods