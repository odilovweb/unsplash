import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaDownload, FaHeart, FaUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/likeSlice";
import { Link } from "react-router-dom";
let API =
  "https://api.unsplash.com/search/photos?client_id=M2PEZIk0kA2LyAXd8CNmaalrddhLnoEOMO5t_9WZZT8&page=1&query=cars";
function PageList() {
  const { value: sliceValue } = useSelector((state) => state.like);

  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const handleSubmit = () => {
    if (!value) {
      API =
        "https://api.unsplash.com/search/photos?client_id=M2PEZIk0kA2LyAXd8CNmaalrddhLnoEOMO5t_9WZZT8&page=1&query=features";
    } else {
      API = `https://api.unsplash.com/search/photos?client_id=M2PEZIk0kA2LyAXd8CNmaalrddhLnoEOMO5t_9WZZT8&page=1&query=${value}`;
    }
    const fetchData = async () => {
      const newData = await axios.get(API).then((res) => {
        return res.data.results;
      });
      setData(newData);
    };
    fetchData();
  };
  useEffect(() => {
    const fetchData = async () => {
      const newData = await axios.get(API).then((res) => {
        return res.data.results;
      });
      setData(newData);
    };
    fetchData();
  }, [API]);
  return (
    <div>
      <div className="pt-5">
        <h1 className="text-2xl font-semibold mb-3 sm:text-3xl">
          Search Any Image:
        </h1>
        <form
          className="text-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="text"
            className="input input-warning mr-5"
          />
          <button className="btn btn-ghost">Search</button>
        </form>
      </div>
      <div className="grid gap-y-8 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {data &&
          data.map((item) => {
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
                    className="text-xl mt-2"
                    onClick={() => {
                      sliceValue.find((i) => {
                        return i.id === item.id;
                      })
                        ? dispatch(remove(item))
                        : dispatch(add(item));
                    }}
                  >
                    {sliceValue.find((i) => {
                      return i.id === item.id;
                    }) ? (
                      <FaHeart color="red" />
                    ) : (
                      <FaHeart color="grey" />
                    )}
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
          })}
      </div>
    </div>
  );
}

export default PageList;
