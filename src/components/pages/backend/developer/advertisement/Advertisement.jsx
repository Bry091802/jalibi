import { Plus } from "lucide-react";
import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import SearchBar from "../partials/SearchBar";
import AdvertisementTable from "./AdvertisementTable";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import ModalAddAdvertisement from "./ModalAddAdvertisement";
import ToastSucess from "../partials/ToastSucess";
import ModalError from "../partials/modals/ModalError";
import ModalValidation from "../partials/modals/ModalValidation";

const Advertisement = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [isAdvertisementEdit, setIsAdvertisementEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setIsAdvertisementEdit(null);
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-div">
          <SideNavigation menu="advertisement" />
          <main>
            <Header
              title="Advertisement"
              subtitle="Manage Kiosk Advertisement"
            />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <AdvertisementTable
                isAdvertisementEdit={isAdvertisementEdit}
                setIsAdvertisementEdit={setIsAdvertisementEdit}
              />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSucess />}

      {store.isAdd && (
        <ModalAddAdvertisement
          isAdvertisementEdit={isAdvertisementEdit}
          setIsAdvertisementEdit={setIsAdvertisementEdit}
        />
      )}
    </>
  );
};

export default Advertisement;