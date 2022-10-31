import { calculateDistance } from "../calculateDistance";

it('calculate distance', () => {

    let coordsMockDevice = {coords: { latitude: 7.1592688, longitude: 34.8561924 }};
    let coordsMockAddress = {coords: { latitude: 7.1579619, longitude: 34.8601804 }};

    var result = calculateDistance(coordsMockDevice,coordsMockAddress);

    expect(result).toEqual(true);
});

