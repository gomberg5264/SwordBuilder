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
    private keyLight: THREE.DirectionalLight;
    private fillLight: THREE.DirectionalLight;
    private backLight: THREE.DirectionalLight;
    /* ****** GEOMETRY SETUP ****** */
    loader = new THREE.OBJLoader();
    private blade: THREE.Mesh;
    private guard: THREE.Mesh;
    private grip: THREE.Mesh;
    private pommel: THREE.Mesh;
    sword = {
        rot_x: 0,
        rot_y: 0,
        rot_z: 0,
        swordGeo: [
            "type-10-blade.obj",
            "style-1-guard.obj",
            "type-10-grip.obj",
            "type-a-pommel.obj"
        ],
        parts: [this.blade,this.guard, this.grip, this.pommel]
    };
    
    spinning = true;
    
    cameraPos = {
        pos_x: 0,
        pos_y: 13,
        pos_z: 24,
        rot_x: 0,
        rot_y: 0,
        rot_z: 127,
    }

    constructor() {
        this.loader.setPath('assets/img/');
    }

    createScene(elementID: string, swordGeo: string[]) {

        this.canvas = <HTMLCanvasElement>document.getElementById(elementID);

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.cameraSet(this.cameraPos);
        this.scene.add(this.camera);

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);

        /* ****** LIGHTING SETUP ****** */

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


        this.swordLoader(this.sword.swordGeo);
        this.animate();
        /* ---------------------------------------- */
        // return { message: "Done setting up scene" }
    }

    cameraRotate(x, y, z) {
        this.camera.rotation.x += x * Math.PI / 180;
        this.camera.rotation.y += y * Math.PI / 180;
        this.camera.rotation.z += z * Math.PI / 180;
        console.log("Rotation X:" + (this.camera.rotation.x * 180 / Math.PI).toFixed(3) + ", Y: " + (this.camera.rotation.y * 180 / Math.PI).toFixed(3) + ", Z: " + (this.camera.rotation.z * 180 / Math.PI).toFixed(3))
        console.log("Position X:" + this.camera.position.x + ", Y: " + this.camera.position.y + ", Z: " + this.camera.position.z)
    }
    cameraMove(x, y, z) {
        this.camera.position.x += x;
        this.camera.position.y += y;
        this.camera.position.z += z;
        console.log("Position X:" + this.camera.position.x + ", Y: " + this.camera.position.y + ", Z: " + this.camera.position.z)
        console.log("Rotation X:" + (this.camera.rotation.x * 180 / Math.PI).toFixed(3) + ", Y: " + (this.camera.rotation.y * 180 / Math.PI).toFixed(3) + ", Z: " + (this.camera.rotation.z * 180 / Math.PI).toFixed(3))

    }

    cameraSet(cameraPos) {
        this.camera.position.x = cameraPos.pos_x;
        this.camera.position.y = cameraPos.pos_y;
        this.camera.position.z = cameraPos.pos_z;
        this.camera.rotation.x = cameraPos.rot_x * Math.PI / 180;
        this.camera.rotation.y = cameraPos.rot_y * Math.PI / 180;
        this.camera.rotation.z = cameraPos.rot_z * Math.PI / 180;
    }

    swordManualRotate(amount) {
        this.spinning=false;
        this.sword.rot_y-=amount/100;        
        for (let i = 0; i<this.sword.parts.length;i++){
            if (this.sword.parts[i]){
                this.sword.parts[i].rotation.y=this.sword.rot_y;
            }
        }
    }
    
    spinControl(){
            setTimeout(()=>{
                this.spinning=true;
            },3000);
    }

    swordLoader(swordGeo){
        if (swordGeo[0]!=this.sword.swordGeo[0]){
            this.sword.swordGeo[0]=swordGeo[0]
        }
        this.loader.load(
            this.sword.swordGeo[0],
            (object) => {
                this.scene.remove(this.sword.parts[0]);
                let material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
                object.children[0].material = material;
                this.sword.parts[0] = object.children[0];
                this.scene.add(this.sword.parts[0]);
                for (let i = 1; i < swordGeo.length; i++) {
                    this.loader.load(swordGeo[i], (part) => {
                        this.scene.remove(this.sword.parts[i]);
                        part.children[0].material = material;
                        this.sword.parts[i] = part.children[0];
                        this.scene.add(this.sword.parts[i]);
                    });
                    console.log(this.sword.parts);
                    
                }
            }
        )
    }

    animate(): void {
        console.log("window.innerHeight: " + window.innerWidth+"window.innerHeight: " +window.innerHeight);
        this.render();
        window.addEventListener('resize', () => {
            this.resize();
        });
    }

    render() {
        this.renderer.setSize(document.body.clientWidth, window.innerHeight);
        requestAnimationFrame(() => {
            this.render();
        });

        if (this.spinning) {
            this.sword.rot_y += 0.01;
            for (let i = 0; i<this.sword.parts.length;i++){
                if (this.sword.parts[i]){
                    this.sword.parts[i].rotation.y=this.sword.rot_y;
                }
            }
        };
        this.renderer.render(this.scene, this.camera);
    }

    resize() {
        let width = window.innerWidth;
        let height = window.innerHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    }
}
