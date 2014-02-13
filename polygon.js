var scene, camera, renderer, controls;

//setup scene, renderer, camera, and lights
function init() { 
	scene = new THREE.Scene();
	var WIDTH = 300;
	var HEIGHT = 300;

	renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize(WIDTH, HEIGHT);
	document.getElementById("polygon").appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(85, WIDTH/HEIGHT, 0.1, 20000);
	camera.position.set(0,3, 2);
	scene.add(camera);

	renderer.setClearColor(0x000000, 0); //RGB background and opacity

	scene.add( new THREE.AmbientLight( 0x222222 ) ); // add a light

	//add a cubes
	var cgeo = new THREE.CubeGeometry(1,1,1);
	var cmat = new THREE.MeshNormalMaterial({color: "#000000", wireframe:true});

	var cube = new THREE.Mesh(cgeo, cmat);
	cube.position.x = 0;
	cube.position.y = 0;
	scene.add(cube);
	

	controls = new THREE.OrbitControls(camera);
	controls.addEventListener( 'change', render);

}
function animate() {
	requestAnimationFrame(animate);
	controls.update();
}

function render(){
		renderer.render(scene, camera);

}

init();
animate();