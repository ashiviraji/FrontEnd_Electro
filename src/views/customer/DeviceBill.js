const KEYS = {
    devices:'devices',
    deviceID:'deviceID'
}


export function insertDevice(data) {
    let devices=getAllDevices();
    data['id'] = genarateDeviceID();
    devices.push(data);
    localStorage.setItem(KEYS.devices, JSON.stringify(devices))
}

export function genarateDeviceID() {
    if(localStorage.getItem(KEYS.deviceID) == null)
        localStorage.getItem(KEYS.deviceID, '0')
    var id = parseInt(localStorage.getItem(KEYS.deviceID))
    localStorage.setItem(KEYS.deviceID, (++id).toString())
    return id;
}

export function getAllDevices() {
    if(localStorage.getItem(KEYS.devices) == null)
        localStorage.setItem(KEYS.devices, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.devices));
}