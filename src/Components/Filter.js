import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import { GiCircle } from "react-icons/gi";
import "./Filter.css";
export default function Admin() {
  return (
    <>
      <div className="Filter">
        <div className="left">
          <div className="header">
            <label>prospects</label>
            <RiArrowDropDownLine />
          </div>
          <div className="list">
            <div className="tickCircle">
              <TiTick className="tickIcon" />
            </div>
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
        </div>

        <div className="center">
          <div className="header">
            <label>Interested</label>
            <RiArrowDropDownLine />
          </div>
          <div className="list">
            <div className="tickCircle">
              <TiTick className="tickIcon" />
            </div>
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
        </div>

        <div className="right">
          <div className="header">
            <label>NotInterested</label>
            <RiArrowDropDownLine />
          </div>
          <div className="list">
            <div className="tickCircle">
              <TiTick className="tickIcon" />
            </div>
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="circleIcon" />
            <label>Campaign one</label>
          </div>
        </div>
      </div>
      <div>
        <div className="Filtertitle">
          <AiFillDelete />
          <label>Clear Filter</label>
        </div>
      </div>
      {/* </div> */}
      {/* </div>
        </div> */}
    </>
  );
}
