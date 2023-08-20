function triangleCalculator() {
  // getting height value
  const stringBase = document.getElementById("triangle-base");
  const base = parseFloat(stringBase.value);

  // getting height value
  const stringHeight = document.getElementById("triangle-height");
  const height = parseFloat(stringHeight.value);

  // area calculation
  const area = 0.5 * base * height;

  //   set up area value into Area Field
  const areaField = document.getElementById("triangle-area");
  areaField.innerText = area;
  //   console.log(area)
  // add to area calculator
  addElementToAreaCalculator(area, "Triangle");
}


// rectangle area calculator
function rectangleAreaCalculator(){
  // width
  const width = getInputValue("rectangle-width");
  console.log(width);
  // length
  const length = getInputValue("rectangle-length");

  // area
  const area = width * length;
  console.log(area);

  // set area value
  const areaField = document.getElementById("rectangle-area");
  areaField.innerText = area;

  // add to area calculator
  addElementToAreaCalculator(area, "Rectangle");
}

// parallelogram area calculation
function parallelogramAreaCalculator(){
  const base = getInputValue("parallel-base");
  const height = getInputValue("parallel-height");

  // area
  const area = base * height;

  // set area
  setArea(area, "parallel-area");
  // add to area calculator
  addElementToAreaCalculator(area, "Parallelogram");
}

// Rhombus area calculation
function rhombusAreaCalculator(){
  const diagonal1 = getInputValue("rhombus-d1");
  const diagonal2 = getInputValue("rhombus-d2");

  // area
  const area = 0.5 * diagonal1 * diagonal2;

  // set area
  setArea(area, "rhombus-area");
  // add to area calculator
  addElementToAreaCalculator(area, "Rhombus");
}

// Pentagon area calculation
function pentagonAreaCalculator(){
  const perimeter = getInputValue("pentagon-perimeter");
  const apothem = getInputValue("pentagon-apothem");

  const area = 0.5 * perimeter * apothem;

  setArea(area, "pentagon-area");

  // add to area calculator
  addElementToAreaCalculator(area, "Pentagon");
}

// Ellipse area calculation
function ellipseAreaCalculator(){
    const major = getInputValue('ellipse-major');
    const minor = getInputValue('ellipse-minor');

    const area = (Math.PI * major * minor).toFixed(3);

    setArea(area, 'ellipse-area')

    // add to area calculator 
    addElementToAreaCalculator(area, 'Ellipse')
}

// reusable Function for getting integer value from field
function getInputValue(fieldClass){
    const stringValue = document.getElementById(fieldClass);
    const value = parseFloat(stringValue.value); 
    return value
}


// set area
function setArea(areaValue, areaId) {
  const value = document.getElementById(areaId);
  value.innerText = areaValue;
}

// add extra item in Area calculator
function addElementToAreaCalculator(area, geometricName){
    const entry = document.getElementById("add-area-element");

    // count paren child
    const counter = entry.childElementCount

    // create new element
    const p = document.createElement('p');

    // add inner HTML code into new element
    p.classList.add('my-3')
    p.innerHTML = `
    ${counter +1}. ${geometricName} ${area} cm<sup>2</sup> 
    <button class = "btn btn-sm btn-success">convert to m<sup>2</sup></button>
    `
    // append new child
    entry.appendChild(p)
}