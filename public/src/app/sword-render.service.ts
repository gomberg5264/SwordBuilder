import * as OBJLoader from 'three-obj-loader'
import * as THREE from 'three';
import { Injectable } from '@angular/core';
OBJLoader(THREE);

@Injectable({
    providedIn: 'root'
})
export class SwordRenderService {
    private canvas: HTMLCanvasElement;
    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private scene: THREE.Scene;
    private light: THREE.AmbientLight;
    private keyLight: THREE.DirectionalLight;
    private fillLight: THREE.DirectionalLight;
    private backLight: THREE.DirectionalLight;
    private loader: THREE.OBJLoader;
    private sword: THREE.Mesh;

    private blade: THREE.Mesh;
    private guard: THREE.Mesh;
    private grip: THREE.Mesh;
    private pommel: THREE.Mesh;

    spinning = true;

    cameraSetups = {
        armingAll:{
            pos_x:0,
            pos_y:13,
            pos_z:24,
            rot_x:0,
            rot_y:0,
            rot_z:127,
        },
        armingGuard:{
            pos_x:11,
            pos_y:0,
            pos_z:12,
            rot_x:0,
            rot_y:22,
            rot_z:180,
        }
    }

    // constructor() { }

    createScene(elementID: string) {

        this.canvas = <HTMLCanvasElement>document.getElementById(elementID);

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.cameraSet(0,13,24,0,0,127);
        this.scene.add(this.camera);

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30,100%,75%)'), 1.0);
        this.keyLight.position.set(-100, 0, 100);

        this.fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240,100%,75%)'), 0.75);
        this.fillLight.position.set(100, 0, 100);

        this.backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        this.backLight.position.set(100, 0, -100).normalize();

        this.scene.add(this.keyLight);
        this.scene.add(this.backLight);
        this.scene.add(this.fillLight);

        /* ---------------------------------------- */
        this.loader = new THREE.OBJLoader();
        this.loader.setPath('assets/img/');
        this.loader.load(
            'sword.obj',
            (object) => {
                let material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
                object.children[0].material = material;
                this.sword = object.children[0]
                this.scene.add(this.sword);
                this.animate();
            }
        )
        /* ---------------------------------------- */
        // return { message: "Done setting up scene" }
    }
    animate(): void {
        this.render();
        window.addEventListener('resize', () => {
            this.resize();
        });
    }

    render() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        requestAnimationFrame(() => {
            this.render();
        });

        if (this.spinning) {this.sword.rotation.y += 0.01};
        this.renderer.render(this.scene, this.camera);
    }

    resize() {
        let width = window.innerWidth;
        let height = window.innerHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        console.log(this.sword.material);
        this.renderer.setSize(width, height);
    }

    cameraRotate(x,y,z){
        this.camera.rotation.x+=x*Math.PI/180;
        this.camera.rotation.y+=y*Math.PI/180;
        this.camera.rotation.z+=z*Math.PI/180;
        console.log("Rotation X:"+(this.camera.rotation.x*180/Math.PI).toFixed(3)+", Y: "+(this.camera.rotation.y*180/Math.PI).toFixed(3)+", Z: "+(this.camera.rotation.z*180/Math.PI).toFixed(3))
        console.log("Position X:"+this.camera.position.x+", Y: "+this.camera.position.y+", Z: "+this.camera.position.z)
    }
    cameraMove(x,y,z){
        this.camera.position.x+=x;
        this.camera.position.y+=y;
        this.camera.position.z+=z;
        console.log("Position X:"+this.camera.position.x+", Y: "+this.camera.position.y+", Z: "+this.camera.position.z)
        console.log("Rotation X:"+(this.camera.rotation.x*180/Math.PI).toFixed(3)+", Y: "+(this.camera.rotation.y*180/Math.PI).toFixed(3)+", Z: "+(this.camera.rotation.z*180/Math.PI).toFixed(3))

    }

    cameraSet(px,py,pz,rx,ry,rz){
        this.camera.position.x = px;
        this.camera.position.y = py;
        this.camera.position.z = pz;
        this.camera.rotation.x = rx*Math.PI/180;
        this.camera.rotation.y = ry*Math.PI/180;
        this.camera.rotation.z = rz*Math.PI/180;
    }

    swordRotate(amount){
        this.spinning=false;
        this.sword.rotation.y-=amount/100;
    }
}
