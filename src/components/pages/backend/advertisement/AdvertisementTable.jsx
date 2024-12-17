import React from "react";
import TableLoader from "../partials/TableLoader";
import IconServerError from "../partials/IconServerError";
import Pills from "../partials/Pills";
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import LoadMore from "../partials/LoadMore";
import IconNoData from "../partials/IconNoData";
import SpinnerTable from "../partials/spinners/SpinnerTable";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
} from "@/components/store/storeAction";
import ModalDelete from "../partials/modals/ModalDelete";
import ModalConfirm from "../partials/modals/ModalConfirm";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";
import useQueryData from "@/components/custom-hook/useQueryData";

const AdvertisementTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  let counter = 1;

  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
  };
  const handleArchive = () => {
    dispatch(setIsConfirm(true));
  };
  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

    const {
      isLoading,
      isFetching,
      error,
      data: result,
      status,
    } = useQueryData(
      `/v2/category`, // endpoint
      "get", // method
      "category" // key
    );

  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {isFetching && !isLoading && <FetchingSpinner />}
        <div className="table-wrapper custom-scroll">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th className="w-[30%]">Title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan="100%">
                    <TableLoader count={20} cols={5} />
                  </td>
                </tr>
              )}
              {result?.count === 0 && (
                <tr>
                  <td colSpan="100%">
                    <IconNoData />
                  </td>
                </tr>
              )}
              {error && (
                <tr>
                  <td colSpan="100%">
                    <IconServerError />
                  </td>
                </tr>
              )}

              {result?.count > 0 &&
                result.data.map((item, key) => (
                  <tr key={key}>
                    <td>{counter++}.</td>
                    <td>
                      <Pills />
                    </td>
                    <td>Advertisement 1</td>
                    <td>
                      <ul className="table-action">
                        {true ? (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Edit"
                                onClick={() => handleAdd()}
                              >
                                <FilePenLine />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Archive"
                                onClick={() => handleArchive()}
                              >
                                <Archive />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Restore"
                                onClick={() => handleRestore()}
                              >
                                <ArchiveRestore />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Delete"
                                onClick={handleDelete}
                              >
                                <Trash2 />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* <LoadMore /> */}
        </div>
      </div>

      {store.isDelete && <ModalDelete />}
      {store.isConfirm && <ModalConfirm />}
    </>
  );
};

export default AdvertisementTable;
