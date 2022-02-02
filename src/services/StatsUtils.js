export function totalVelocity(...velocity) {
    const totalVelocity = Math.round(
        (
            Math.abs(velocity[0][0]) + Math.abs(velocity[0][1]) + Math.abs(velocity[0][2])
        )
    );
    return totalVelocity;
}

export function msToHuman(ms) {
    const milliseconds = ms % 1000;
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (60 * 1000)) % 60);

    return minutes + ":" + seconds + "." + milliseconds;
}

export function colorArrayToRGB(carColors) {
    const colorString = "rgb(" + Math.round((carColors[0] * 100)) + ", " + Math.round((carColors[1] * 100)) + ", " + Math.round((carColors[2] * 100)) + ")";
    return colorString;
}
