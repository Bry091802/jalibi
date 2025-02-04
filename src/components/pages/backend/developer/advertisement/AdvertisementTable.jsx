import useQueryData from "@/components/custom-hook/useQueryData";
import Status from "@/components/partials/Status";
import ModalArchive from "@/components/partials/modal/ModalArchive";
import ModalRestore from "@/components/partials/modal/ModalRestore";
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
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite";
import { useInView } from "react-intersection-observer";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";
import TableLoader from "../partials/TableLoader";
import IconNoData from "../partials/IconNoData";
import IconServerError from "../partials/IconServerError";
import SearchBar from "@/components/partials/SearchBar";
import { FaArchive, FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
import SearchBarWithFilterStatus from "@/components/partials/SearchBarWithFilterStatus";

const AdvertisementTable = ({ setIsAdvertisementEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isFilter, setIsFilter] = React.useState(false);
  const [onSearch, setOnSearch] = React.useState(false);
  const [statusFilter, setStatusFilter] = React.useState("");
  const search = React.useRef({ value: "" });
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setIsAdvertisementEdit(item);
  };
  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsId(item.advertisement_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsId(item.advertisement_aid);
  };
  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsId(item.advertisement_aid);
  };

  // const {
  //   isLoading,
  //   isFetching,
  //   error,
  //   data: result,
  //   status,
  // } = useQueryData(
  //   `/v2/advertisement`, // endpoint
  //   "get", // method
  //   "advertisement" // key
  // );

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["advertisement", onSearch, isFilter, statusFilter],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        "/v2/advertisement/search", // search or filter endpoint
        `/v2/advertisement/page/${pageParam}`, // page api/endpoint
        isFilter || store.isSearch, // search boolean
        {
          isFilter,
          statusFilter,
          searchValue: search?.current.value,
          id: "",
        } // payload
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => +1);
      fetchNextPage();
    }
  }, [inView]);

  let counter = 1;
  return (
    <>
      <div>
        <SearchBarWithFilterStatus
          search={search}
          dispatch={dispatch}
          store={store}
          result={result}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          setIsFilter={setIsFilter}
        />
      </div>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        <div className="table-wrapper custom-scroll">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th className="w-[30%]">Status</th>
                <th>Title</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {/* LOADING FOR NO DATA */}
              {(status === "pending" || result?.pages[0].data.length === 0) && (
                <tr>
                  <td colSpan="100%" className="p-10">
                    {status === "pending" ? (
                      <TableLoader cols={2} count={20} />
                    ) : (
                      <IconNoData />
                    )}
                  </td>
                </tr>
              )}
              {/* ERROR */}
              {error && (
                <tr>
                  <td colSpan="100%">
                    <IconServerError />
                  </td>
                </tr>
              )}
              {/* RESULT */}
              {result?.pages.map((page, pageKey) => (
                <React.Fragment key={pageKey}>
                  {page.data.map((item, key) => {
                    return (
                      <tr key={key} className="group relative cursor-pointer">
                        <td className="text-center">{counter++}</td>
                        <td>
                          {item.advertisement_is_active === 1 ? (
                            <Status text="Active" />
                          ) : (
                            <Status text="Inactive" />
                          )}
                        </td>
                        <td>{item.advertisement_title}</td>
                        <td
                          colSpan="100%"
                          className="opacity-0 group-hover:opacity-100"
                        >
                          <div className="flex items-center justify-end gap-2 mr-4">
                            {item.advertisement_is_active == 1 ? (
                              <>
                                <button
                                  type="button"
                                  data-tooltip="Archive"
                                  className="tooltip"
                                  disabled={isFetching}
                                  onClick={() => handleArchive(item)}
                                >
                                  <FaArchive />
                                </button>
                                <button
                                  type="button"
                                  data-tooltip="Edit"
                                  className="tooltip"
                                  disabled={isFetching}
                                  onClick={() => handleEdit(item)}
                                >
                                  <FaEdit />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Delete"
                                  disabled={isFetching}
                                  onClick={() => handleRestore(item)}
                                >
                                  <FaTrashRestore />
                                </button>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Delete"
                                  disabled={isFetching}
                                  onClick={() => handleDelete(item)}
                                >
                                  <FaTrash />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}

            </tbody>
          </table>

          <LoadMore
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            result={result?.pages[0]}
            setPage={setPage}
            page={page}
            refView={ref}
          />
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/advertisement/${id}`}
          queryKey={"advertisement"}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/advertisement/active/${id}`}
          queryKey={"advertisement"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/advertisement/active/${id}`}
          queryKey={"advertisement"}
        />
      )}
    </>
  );
};

export default AdvertisementTable;
