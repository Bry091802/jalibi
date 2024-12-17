import useQueryData from "@/components/custom-hook/useQueryData";
import ModalArchive from "@/components/partials/modal/ModalArchive";
import ModalRestore from "@/components/partials/modal/ModalRestore";
import Status from "@/components/partials/Status";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import LoadMore from "../partials/LoadMore";
import ModalDelete from "@/components/partials/modal/ModalDelete";
import TableLoader from "../partials/TableLoader";
import IconNoData from "../partials/IconNoData";
import IconServerError from "../partials/IconServerError";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";

const FoodsTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
    setIsId(item.food_aid);
  };
  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsId(item.food_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsId(item.food_aid);
  };
  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsId(item.food_aid);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: result,
    status,
  } = useQueryData(
    `/v2/food`, // endpoint
    "get", // method
    "food" // key
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
                <th className="w-[33%]">Title</th>
                <th>Price</th>
                <th>Category</th>
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
                      {item.food_is_active === 1 ? (
                        <Status text="Active" />
                      ) : (
                        <Status text="Inactive" />
                      )}
                    </td>
                    <td>{item.food_title}</td>
                    <td> P {item.food_price}</td>
                    <td>{item.category_title}</td>

                    <td>
                      <ul className="table-action">
                        {item.food_is_active === 1 ? (
                          <>
                            <li>
                              <button className="tooltip" data-tooltip="Edit">
                                <FilePenLine onClick={() => handleEdit(item)} />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Archive"
                              >
                                <Archive onClick={() => handleArchive(item)} />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Restore"
                              >
                                <ArchiveRestore
                                  onClick={() => handleRestore(item)}
                                />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
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

          <LoadMore />
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/food/${id}`}
          queryKey={"food"}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/food/active/${id}`}
          queryKey={"food"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/food/active/${id}`}
          queryKey={"food"}
        />
      )}
    </>
  );
};

export default FoodsTable;
