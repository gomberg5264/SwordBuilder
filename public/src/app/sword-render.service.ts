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
            "","","",""
        ],
        gripOffset: 4.1,
        parts: [this.blade,this.guard, this.grip, this.pommel]
    };
    
    spinning = true;
    
    cameraPos = {
        pos_x: 4,
        pos_y: -5,
        pos_z: 15,
        rot_x: 30,
        rot_y: 15,
        rot_z: -59,
    }

    constructor() {
        this.loader.setPath('assets/geometry/');
    }

    createScene(elementID: string, swordGeo: string[],gripOffset=0) {

        this.canvas = <HTMLCanvasElement>document.getElementById(elementID);
        this.sword.swordGeo=swordGeo;
        this.sword.gripOffset=gripOffset;

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.cameraSet(this.cameraPos);
        this.scene.add(this.camera);

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true,
            //<*> set up a conditional for the moment of saving the render to file.
            preserveDrawingBuffer:false,
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


        this.swordLoader(this.sword.swordGeo,4.05);
        console.log("starting: "+this.sword.gripOffset);
        
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

    swordLoader(swordGeo,gripOffset=null){
        if (swordGeo[0]!=this.sword.swordGeo[0]){
            this.sword.swordGeo[0]=swordGeo[0]
        }
        console.log("Grip offset in the render service:"+gripOffset);
        
        if (gripOffset!=null){
            this.sword.gripOffset=gripOffset;
        }
        this.loader.load(
            swordGeo[0],
            (object) => {
                console.log("blade object: ", swordGeo[0]);
                
                this.scene.remove(this.sword.parts[0]);
                let material = new THREE.MeshPhysicalMaterial({ 
                    color: 0x888888
                });                
                material.flatShading=false;
                console.log(object);
                object.children[0].material = material;
                this.sword.parts[0] = object.children[0];
                this.scene.add(this.sword.parts[0]);
                for (let i = 1; i < swordGeo.length; i++) {
                    this.loader.load(swordGeo[i], (part) => {
                        console.log("local part:"+ swordGeo[i]);
                        
                        this.scene.remove(this.sword.parts[i]);
                        console.log(part);

                        part.children[0].material = material;
                        this.grip=part.children[0];
                        this.sword.parts[i] = part.children[0];
                        if (i==2){
                            let leather = new THREE.MeshLambertMaterial({color:0x1e1e1e});
                            part.children[0].material = leather;
                        }
                        if (i==3){
                            this.grip.position.y=-this.sword.gripOffset;
                            console.log(this.sword.gripOffset);
                            
                            console.log(this.grip);
                        }
                        this.scene.add(this.sword.parts[i]);
                    });
                }
            }
        )
    }

    animate(): void {
        // console.log("window.innerHeight: " + window.innerWidth+"window.innerHeight: " +window.innerHeight);
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
