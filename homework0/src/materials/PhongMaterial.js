class PhongMaterial extends Material{
    constructor(color,colorMap,specular,intensity){
        let textureSample = 0;
        if(colorMap != null){
            textureSample = 1;
            super({
                'uTextureSample':{type:'li',value:textureSample},
                'uSampler':{type:'texture',value:colorMap},
                'uKd':{type :'3fv',value:color},
                'uKs':{type:'3fv',value:soecular},
                'uLightIntensity':{type:'1f',value:intensity}
            },[],PhongVertexShader,PhongFragmentShader);
        }else{
            //console.log(color)
            super({
                'uTextureSample':{type:'li',value:textureSample},
            })
        }
    }
}