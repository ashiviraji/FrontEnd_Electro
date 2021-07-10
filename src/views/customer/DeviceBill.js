const KEYS = {
    devices:'devices',
    deviceID:'deviceID'
}


export function insertDevice(data) {
    let devices=getAllDevices();
    console.log(devices);
    data['id'] = genarateDeviceID();
    devices.push(data);
    localStorage.setItem(KEYS.devices, JSON.stringify(devices))
}

export function updateDevice(data) {
    let devices=getAllDevices();
    let recordIndex = devices.findIndex(x => x.id === data.id);
    console.log(data.id)
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

<<<<<<< HEAD
export function updateDevice(data) {
    let devices=getAllDevices();
    let recordIndex = devices.findIndex(x => x.id == data.id);
    console.log(data.id)
    devices[recordIndex] = { ...data }
    localStorage.setItem(KEYS.devices, JSON.stringify(devices))
=======
export function Deletedevice(appliance) {
    let devices = getAllDevices();
    devices = devices.filter(x => x.appliance != appliance)
    localStorage.setItem(KEYS.devices, JSON.stringify(devices));
>>>>>>> c8941709818831ac40e5e82deb904dc8a8828456
}

export function getAllDevices() {
    if(localStorage.getItem(KEYS.devices) == null)
        localStorage.setItem(KEYS.devices, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.devices));
}