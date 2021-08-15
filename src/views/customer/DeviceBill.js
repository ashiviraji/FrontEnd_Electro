import Axios from 'axios';

const KEYS = {
    devices:'devices',
    deviceID:'deviceID'
}


export function insertDevice(data) {

    var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;


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
            } 
        }).catch((error) => {
            console.log("this is response" + error);

        });

    let devices=getAllDevices();
    console.log(devices);
    data['id'] = genarateDeviceID();
    devices.push(data);
    localStorage.setItem(KEYS.devices, JSON.stringify(devices))
}

export function updateDevice(data) {
    let devices=getAllDevices();
    let recordIndex = devices.findIndex(x => x.id === data.id);
    devices[recordIndex] = { ...data }
    localStorage.setItem(KEYS.devices, JSON.stringify(devices))
}

export function genarateDeviceID() {
    if(localStorage.getItem(KEYS.deviceID) == null)
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
    if(localStorage.getItem(KEYS.devices) == null)
        localStorage.setItem(KEYS.devices, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.devices));
}