import React, {useState, useEffect} from "react";
import './Home.css';
import axios from "axios";

const fetchInfos = () => {
  return axios.get(window.$baseURL + "infos/")
      .then(response => {
        return response;
      }).catch(error => {
        console.error(error);
        return error;
      });
}

export default function Home(props){
  const [infos, setInfos] = useState([]);
  
  useEffect(() => {
    fetchInfos().then(userInfo => {
      setInfos(JSON.parse(JSON.stringify(userInfo.data)));
    });
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="Home">
          <table className = "table table-bordered table-striped table-hover">
            <thead className = "thead-dark">
              <tr>
                <th key = "NameHeader">CountryId</th>
                <th key = "ConfirmedHeader">Confirmed</th>
                <th key = "DeathHeader">Death</th>
                <th key = "RecoveredHeader">Recovered</th>
                <th key = "DateHeader">Date</th>
                <th key = "Dummy"></th>
              </tr>
            </thead>
            <tbody>
              {
                infos.map((info) => {
                  return (
                    <tr key = {info["id"]}>
                      <td key = "Name">{info["Country"]}</td>
                      <td key = "Confirmed">{info["Confirmed"]}</td>
                      <td key = "Death">{info["Death"]}</td>
                      <td key = "Recovered">{info["Recovered"]}</td>
                      <td key = "Date">{info["Date"]}</td>
                      <td key = "NavigateButton">
                        <button className="btn-secondary" onClick = {() => props.handleClickToCountry(info["Country"])}>
                          Details
                        </button>
                      </td>
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