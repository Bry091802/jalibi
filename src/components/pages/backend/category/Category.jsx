import { Plus } from "lucide-react";
import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import SearchBar from "../partials/SearchBar";
import AdvertisementTable from "./CategoryTable";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import ModalAddAdvertisement from "./ModalAddCategory";
import ToastSucess from "../partials/ToastSucess";
import ModalError from "../partials/modals/ModalError";
import ModalValidation from "../partials/modals/ModalValidation";
import CategoryTable from "./CategoryTable";
import ModalAddCategory from "./ModalAddCategory";

const Category = () => {
  const { dispatch, store } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-div">
          <SideNavigation menu="category" />
          <main>
            <Header title="Category" subtitle="Manage Category" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <SearchBar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <CategoryTable />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSucess />}

      {store.isAdd && <ModalAddCategory />}
    </>
  );
};

export default Category;
