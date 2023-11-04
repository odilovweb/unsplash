import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/likeSlice";
import { FaDownload, FaHeart, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
function LikedPhotos() {
  const dispatch = useDispatch();
  const { value: data } = useSelector((state) => state.like);
  return (
    <>
      {data.length ? (
        <div className="grid gap-y-8 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <img
                    onClick={() => document.getElementById(item.id).showModal()}
                    srcSet={item.urls.regular}
                    alt={item.slug}
                    className="w-[300px] h-[300px] object-cover mx-auto"
                  />
                  <button
                    className="text-xl mt-2 flex gap-2 items-center"
                    onClick={() => {
                      dispatch(remove(item));
                    }}
                  >
                    Remove <FaHeart color="red" />
                  </button>
                </div>
                <dialog id={item.id} className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg mb-3">More the image</h3>
                    <p className="font-semibold mb-3">{item.alt_description}</p>
                    <p className="flex items-center gap-1 font-bold mb-3">
                      <FaHeart /> {item.likes}
                    </p>
                    <p className="flex flex-col mb-3">
                      <span>Created at : {item.created_at}</span>
                      <span>Updated at : {item.updated_at}</span>
                    </p>
                    <Link
                      to={item.user.portfolio_url}
                      className="flex font-semibold opacity-90 font-mono items-center gap-3 link text-xl"
                    >
                      <FaUser /> {item.user.username}
                    </Link>
                    <div className="mb-3">
                      <p>
                        <span>Total likes: {item.user.total_likes}</span>
                      </p>
                      <p>
                        <span>Total photos: {item.user.total_photos}</span>
                      </p>
                      <p>
                        <span>
                          Total collections: {item.user.total_collections}
                        </span>
                      </p>
                    </div>
                    <Link
                      to={item.links.download}
                      className="flex items-center gap-2 font-semibold"
                    >
                      <FaDownload />
                      Download the photo
                    </Link>
                  </div>
                </dialog>
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <h1 className="text-3xl text-center py-5 font-bold">
          You don't have any liked photos :(
        </h1>
      )}
    </>
  );
}

export default LikedPhotos;
