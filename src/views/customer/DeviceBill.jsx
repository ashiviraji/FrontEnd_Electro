import { ContactsOutlined } from '@material-ui/icons';
import Axios from 'axios';
import React from "react";

import { useHistory } from "react-router";

const KEYS = {
    devices: 'devices',
    deviceID: 'deviceID'
}

var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;


var ParamsUserId = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;
export function insertDevice(data) {

    // let History = useHistory();
    // e.preventDefault();
    Axios.post(`${process.env.REACT_APP_BASE_URL}/add-device-main-bill/${ParamsUserId}`, {
        data: data
    }, {
        headers: {
            authorization: `Token ${token}`
        },
    }).then((response) => {
        console.log(response);
        if (response.data.status) {
            console.log("Add device");
        } else {
            // history.push("/sign-in");
            // deleteAllCookies();//delete all cookies
        }
    }).catch((error) => {
        console.log("this is response" + error);

    });

}

export async function updateDevice(data) {
    // let devices = getAllDevices();
    // let recordIndex = devices.findIndex(x => x.device_id === data.device_id);
    // devices[recordIndex] = { ...data }
    // localStorage.setItem(KEYS.devices, JSON.stringify(devices))

    await Axios.post(`${process.env.REACT_APP_BASE_URL}/update-device-main-bill/${ParamsUserId}`, {
        data: data
    }, {
        headers: {
            authorization: `Token ${token}`
        },
    }).then((response) => {
        console.log(response);
        if (response.data.status) {
            console.log("Update device");
        } else {
            // history.push("/sign-in");
            // deleteAllCookies();//delete all cookies
        }
    }).catch((error) => {
        console.log("this is response" + error);

    });
}

export function genarateDeviceID() {
    if (localStorage.getItem(KEYS.deviceID) == null)
        localStorage.setItem(KEYS.deviceID, '0')
    var device_id = parseInt(localStorage.getItem(KEYS.deviceID))
    localStorage.setItem(KEYS.deviceID, (++device_id).toString())
    console.log(device_id);
    return device_id;
}

export function Deletedevice(device_id,newBillId) {
    // let devices = getAllDevices();
    // devices = devices.filter(x => x.appliance != appliance)
    // localStorage.setItem(KEYS.devices, JSON.stringify(devices));
    Axios.post(`${process.env.REACT_APP_BASE_URL}/delete-device-main-bill/${ParamsUserId}`, {
        device_id: device_id,
        bill_id:newBillId
    }, {
        headers: {
            authorization: `Token ${token}`
        },
    }).then((response) => {
        console.log(response);
        if (response.data.status) {
            console.log("Delete device");
        } else {
            // history.push("/sign-in");
            // deleteAllCookies();//delete all cookies
        }
    }).catch((error) => {
        console.log("this is response" + error);

    });
}

export async function getAllDevices(newBillId) {
    // let History = useHistory();
    console.log("call get all device function 1")
    console.log("bill id come for get all device" + newBillId)

    const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/get-device-main-bill/${ParamsUserId}`, {
        newBillId: newBillId
    }, {
        headers: {
            authorization: `Token ${token}`
        }
    })

    console.log(response.data.data);
    return response.data.data;


    // if (localStorage.getItem(KEYS.devices) == null)
    //     localStorage.setItem(KEYS.devices, JSON.stringify([]))
    // console.log(typeof JSON.parse(localStorage.getItem(KEYS.devices)))
    //  return JSON.parse(localStorage.getItem(KEYS.devices));
}

/**
  * function of delete all cookies
//   */
// function deleteAllCookies() {
//     var cookies = document.cookie.split(";");

//     for (var i = 0; i < cookies.length; i++) {
//         var cookie = cookies[i];
//         var eqPos = cookie.indexOf("=");
//         var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
//         document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
//     }
// }