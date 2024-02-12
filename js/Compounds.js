getModel: function modl(){
  return fetch("js/places.json")
  .then(res => res.json())
  .then(data => data);
}

createModle: function Model(model){

var elementName = model.barcode_value;
var barcodeValue = model.barcode_value;

//Get the color of the element

//Scene
var scene = document.querySelector("a-scene");

//Add marker entity for BARCODE marker
var marker = document.createElement("a-marker");

marker.setAttribute("id", `marker-${barcodeValue}`);
marker.setAttribute("type", "barcode");
marker.setAttribute("element_name", elementName);
marker.setAttribute("value", barcodeValue);

scene.appendChild(marker);

if(barcodeValue===0){
  var pri = document.createElement("a-entity");
  pri.setAttribute("id",`${modelName}`)
  pri.setAttribute("geometry", {
    primitive:"box",
    width:model.width,
    height:model.height
  });
  pri.setAttribute("material",{color:model.color});
  pri.setAttribute("position",model.position);
  pri.setAttribute("rotation",model.rotation);
  marker.appendChild(pri)
}

}