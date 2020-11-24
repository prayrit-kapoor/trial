window.addEventListener('DOMContentLoaded', function()
{
    var canvas = document.getElementById('canvas');

    //Engine Creation.
    var engine = new BABYLON.Engine(canvas, true);

    var createScene = function()
    {
        //Scene Creation and Background Color.
        var scene = new BABYLON.Scene(engine);        
        scene.clearColor = new BABYLON.Color3.Blue;

       //Importing multimeter (3d model).
       var multimeter = BABYLON.SceneLoader.ImportMesh("","./3d/","multimeter.glb",scene,function(newMeshes){
          
        });
        
        //Camera Creation.
        var alpha = BABYLON.Tools.ToRadians(45); //Longitudinal Axis.
        var beta = BABYLON.Tools.ToRadians(45);  //Latitudinal Axis.
        var camera = new BABYLON.ArcRotateCamera('arcRotateCamera', alpha, beta, 15.0, multimeter.position, scene);
        
        //To Recieve Mouse and Keyboard Inputs. 
        camera.attachControl(canvas,true);

        //Keyboard Inputs.
        camera.keysUp.push(87);     //W
        camera.keysLeft.push(65);   //A
        camera.keysDown.push(83);   //S
        camera.keysRight.push(68);  //D

        //Light Creation.
        var light = new BABYLON.PointLight('pointLight', new BABYLON.Vector3(0,10,0),scene);
        light.diffuse = new BABYLON.Color3.White;
        light.intensity=1000;
        
        //Making Light a Parent of Camera.
        light.parent = camera;
    
        return scene;
    }

    var scene = createScene();
    engine.runRenderLoop(function()
    {
        scene.render();
    });
});
