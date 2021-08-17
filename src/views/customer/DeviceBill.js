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

export function insertDevice(data) {



    // let History = useHistory();
    // e.preventDefault();
    Axios.post(`${process.env.REACT_APP_BASE_URL}/add-device-main-bill`, {
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
            deleteAllCookies();//delete all cookies
        }
    }).catch((error) => {
        console.log("this is response" + error);

    });

    let devices = getAllDevices();
    console.log(devices);
    data['id'] = genarateDeviceID();
    devices.push(data);
    localStorage.setItem(KEYS.devices, JSON.stringify(devices))
}

export function updateDevice(data) {
    let devices = getAllDevices();
    let recordIndex = devices.findIndex(x => x.id === data.id);
    devices[recordIndex] = { ...data }
    localStorage.setItem(KEYS.devices, JSON.stringify(devices))
}

export function genarateDeviceID() {
    if (localStorage.getItem(KEYS.deviceID) == null)
        localStorage.setItem(KEYS.deviceID, '0')
    var id = parseInt(localStorage.getItem(KEYS.deviceID))
    localStorage.setItem(KEYS.deviceID, (++id).toString())
    console.log(id);
    return id;
}

export function Deletedevice(appliance) {
    let devices = getAllDevices();
    devices = devices.filter(x => x.appliance != appliance)
    localStorage.setItem(KEYS.devices, JSON.stringify(devices));
}

export function getAllDevices() {
    // let History = useHistory();
    console.log("response.data");
    Axios.get(`${process.env.REACT_APP_BASE_URL}/get-device-main-bill`, {
        headers: {
            authorization: `Token ${token}`
        },
    })
        .then((response) => {

            if (response.data.status) {
                console.log(response.data);
                // KEYS.devices = response;
                console.log("successfully get device-main-bill");

            } else {

                // History.push("/sign-in");
                // window.location.reload();//reload browser
                deleteAllCookies();//delete all cookies
            }
        }).catch((error) => {
            console.log("this is 1c response", error);
        });

    if (localStorage.getItem(KEYS.devices) == null)
        localStorage.setItem(KEYS.devices, JSON.stringify([]))
    
    return JSON.parse(localStorage.getItem(KEYS.devices));
}

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