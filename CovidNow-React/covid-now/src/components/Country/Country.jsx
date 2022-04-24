import React, {useState, useEffect} from "react";
import './Country.css';
import axios from "axios";

const fetchInfos = (id) => {
  return axios.get(window.$baseURL + "infos/" + id + "/")
      .then(response => {
        return response;
      }).catch(error => {
        console.error(error);
        return error;
      });
}

export default function Country(props){
  const [infos, setInfos] = useState([]);
    
  useEffect(() => {
    fetchInfos(props.id).then(userInfo => {
      setInfos(JSON.parse(JSON.stringify(userInfo.data)));
    });
  }, []);
  
  return (
    <React.Fragment>
      <div className="container">
        <div className="Country">
          <table className = "table table-bordered table-striped table-hover">
            <thead className = "thead-dark">
              <tr>
                <th key = "DateHeader">Date</th>
                <th key = "ConfirmedHeader">Confirmed</th>
                <th key = "DeathHeader">Death</th>
                <th key = "RecoveredHeader">Recovered</th>
              </tr>
            </thead>
            <tbody>
              {
                infos.map((info) => {
                  return (
                    <tr key = {info["Date"]}>
                      <td key = "Date">{info["Date"]}</td>
                      <td key = "Confirmed">{info["Confirmed"]}</td>
                      <td key = "Death">{info["Death"]}</td>
                      <td key = "Recovered">{info["Recovered"]}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}