// https://en.wikipedia.org/wiki/List_of_common_resolutions
const SVGA_W = 800;
const SVGA_H = 600;

const FHD_W = 1920;
const FHD_H = 1080;

// black, white, ..
let colors = [
    [255, 0, 0, 50],
    [0, 255, 0, 50],
    [0, 0, 255, 50]
];
let index = 0;

function setup() {
    createCanvas(SVGA_W, SVGA_H);
    // createCanvas(FHD_W, FHD_H);
}

function draw() {
    if (mouseIsPressed) {
        let color = colors[index];
        print(color);
        fill(color);
        ellipse(mouseX, mouseY, 50, 50);
    }
}

function mouseWheel(event) {
    // up: 1; down: -1
    let up_down = Math.sign(event.delta);
    let number_of_colors = colors.length;
    index = Math.abs((index + up_down) % number_of_colors);

    print(index);
    print(color[index]);
}