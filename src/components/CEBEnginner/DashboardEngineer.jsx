import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// import Typography from '@material-ui/core/Typography';
import "../../assets/css/CEBEngineer/dashboardengineer.css";
import { GoRequestChanges } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import dashboardUser from "../../assets/img/dashboardUser.svg";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import "../../assets/css/Customer/deviceCharttou.css";

const useStyles = makeStyles({
  engineerCurrentRoot: {
    width: "300px",
    marginLeft: "30px",
    marginTop: "30px",
    backgroundColor: "#69B2F5 ",
    height: "150px",
    cursor: "pointer",
    borderLeftWidth: "10px",
    borderLeftStyle: "solid",
    borderLeftColor: "#4A7FC8",
  },

  engineerSpecialRoot: {
    width: "300px",
    marginLeft: "30px",
    marginTop: "30px",
    backgroundColor: " #F77D59 ",
    height: "150px",
    cursor: "pointer",
    borderLeftWidth: "10px",
    borderLeftStyle: "solid",
    borderLeftColor: "#F42C18 ",
  },

  engineerMyprofile: {
    width: "300px",
    marginLeft: "30px",
    marginTop: "30px",
    backgroundColor: "#F2C54D  ",
    height: "150px",
    cursor: "pointer",
    borderLeftWidth: "10px",
    borderLeftStyle: "solid",
    borderLeftColor: "#F29E17   ",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  let history = useHistory();

  const [requestCount, setRequestCount] = useState("");
  const [userCount, setUserCount] = useState("");

  const classes = useStyles();
  var ParamsUserId = document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .reduce(
      (accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value),
      }),
      {}
    ).userId;

  // console.log(ParamsUserId);

  var token = document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .reduce(
      (accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value),
      }),
      {}
    ).token;

  const getDashboardData = () => {
    // e.preventDefault();

    Axios.get(
      `${process.env.REACT_APP_BASE_URL}/dashboard-details/${ParamsUserId}`,
      {
        headers: {
          authorization: `Token ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.data.status) {
          setRequestCount(
            parseInt(response.data.data.result1[0].request_count) +
            parseInt(response.data.data.result2[0].request_count)
          );
          setUserCount(response.data.data.result3[0].user_count);
        } else {
          history.push("/sign-in");
          window.location.reload(); //reload browser
          deleteAllCookies(); //delete all cookies
        }
      })
      .catch((error) => {
        console.log("this is 1c response", error);
      });
  };

  /**
   * function of delete all cookies
   */
  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  useEffect(() => {
    getDashboardData();
  }, []);

  // const config = {
  //   type: 'doughnut',
  //   data: data,
  // };

  return (
    <div className="engineer-home-user-main">
      <label className="engineer-welcome-note">
        Welcome{" "}
        {
          document.cookie
            .split(";")
            .map((cookie) => cookie.split("="))
            .reduce(
              (accumulator, [key, value]) => ({
                ...accumulator,
                [key.trim()]: decodeURIComponent(value),
              }),
              {}
            ).name
        }
      </label>
      <div className="engineer-user-cards-area">
        <Card className={classes.engineerCurrentRoot} id="engineer-card1">
          <CardContent>
            <label className="engineer-card-title-name">Registered Users</label>
          </CardContent>
          <div>
            <FaUsers className="engineer-svg-icon"></FaUsers>
            <label className="engineer-numeric-value">{userCount} </label>
          </div>
          <CardActions></CardActions>
        </Card>

        <Link to="/engineer-pending-unit-charges-home">
          <Card className={classes.engineerSpecialRoot} id="engineer-card2">
            <CardContent>
              <label className="engineer-card-title-name">
                Pending Updates
              </label>
            </CardContent>
            <div>
              <GoRequestChanges className="engineer-svg-icon"></GoRequestChanges>
              <label className="engineer-numeric-value">{requestCount}</label>
            </div>
            <CardActions></CardActions>
          </Card>
        </Link>

        <Link to="/engineer-userprofile">
          <Card className={classes.engineerMyprofile} id="engineer-card3">
            <CardContent>
              <label className="engineer-card-title-name">My profile</label>
            </CardContent>
            <div>
              <BsFillPersonFill className="engineer-svg-icon"></BsFillPersonFill>
              <label className="engineer-numeric-value"></label>
            </div>
            <CardActions></CardActions>
          </Card>
        </Link>
      </div>

      <div className="admin-image-details">
        <img
          src={dashboardUser}
          alt="unit-charge-update-admin"
          width="450"
          height="350"
        />
      </div>
      {/* <div>

        <div class="row row-tou" >
          <div class="col-sm-4" style={{ marginLeft: '10%', marginTop: '5%' }}>
            <div class="card">
              <div class="card-body">
                <h6 class="card-title text-center">Cost Usage (LKR/month)</h6>
                <div class="col-sm-12">
                  <div class="card chart-tou">
                    <div class="card-body chartbody">
                      <div className="chart-devicewise">
                        <Doughnut
                          data={{

                            datasets: [{
                              label: 'My First Dataset',
                              data: [300, 50, 100],
                              backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                              ],
                              hoverOffset: 4
                            }]
                          }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="col-sm-4" style={{ marginLeft: '10%', marginTop: '5%' }}>
            <div class="card">
              <div class="card-body">
                <h6 class="card-title text-center">Cost Usage (LKR/month)</h6>
                <div class="col-sm-12">
                  <div class="card chart-tou">
                    <div class="card-body chartbody">
                      <div className="chart-devicewise">
                        <Doughnut
                          data={{

                            datasets: [{
                              label: 'My First Dataset',
                              data: [300, 50, 100],
                              backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                              ],
                              hoverOffset: 4
                            }]
                          }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
