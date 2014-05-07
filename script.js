window.onload = function()
{
	inicio();
}

function inicio()
{
	/*
	TamaÃ±o/tomaÃ±o del sol = %
	*/
	function movimiento(path, obj, vel)
    {
        //console.log("Vel de: "  + obj + " es: " + vel);
        var pathLength = path.getTotalLength();
        var tween = new TWEEN.Tween({ length: 0  })
        .to({ length: pathLength }, vel)
        .onUpdate(function()
        {
            var point = path.getPointAtLength(this.length);
            obj.style.webkitTransform = 'translate('+ point.x + 'px,'+ point.y +'px)';
        }).repeat(999999999).start();
        animate = function()
        {
            requestAnimationFrame(animate)
            TWEEN.update()
        }
        animate();
    }
    var tamReal = false;
	var crearlunas = function(objeto, lunas)
    {
        var tamanolunas = lunas.tamano;
        //console.debug(objeto);
        if(tamReal)
        {
            //console.log("Ingresa");
            tamanolunas = Math.round(jupiter.tamano * (lunas.porcentaje / 100));
            //console.log(planeta.nombre + " = " + tamanoPlaneta);
        }
        objeto.style.width = tamanolunas + "px";
        objeto.style.height = tamanolunas + "px";
        objeto.style.backgroundImage = "url(lunas.imagen')";
        objeto.style.backgroundSize = tamanolunas + "px " + tamanolunas + "px";
        var margen = (Math.round(tamanolunas / 2)) * -1;
        objeto.style.marginTop = margen + "px";
        objeto.style.marginLeft = margen + "px";
        objeto.style.borderRadius = "50%";
        objeto.style.position = "absolute";
        console.debug(objeto);
        console.log("baselunas " + lunas.imagen);
        objeto.style.border = "thick solid #FFF";
        objeto.setAttribute("class", "baselunas" + lunas.imagen);
    }
	var lunas = [
                {nombre: "io", 
                 imagen: "io.png",
                 porcentaje: 0.4,
                 tamano: 10 
                },
                {nombre: "europa", 
                 imagen: "europa.png",
                 porcentaje: 0.9,
                 tamano: 20 
                },
                {nombre: "gaminides", 
                 imagen: "gaminides.png",
                 porcentaje: 0.9,
                 tamano: 20 
                },
                {nombre: "calisto", 
                 imagen: "calisto.png",
                 porcentaje: 0.5,
                 tamano: 15 
                }
             
             
               ];
    var objjupt = nom_div('jupiter_svg');
    var jupiter = {
        tamaño: objjupt.height.baseVal.value, 
        x : objjupt.x.baseVal.value, 
        y : objjupt.y.baseVal.value
    };
    var objeto = "";
    var ruta = "";
    var velInicia = 3000;
    for(var i = 1; i <= lunas.length; i++)
    {
    	objeto = nom_div("objeto_" + i);
    	ruta = nom_div("ruta_" + i);
    	crealunas(objeto, lunas[i - 1]);
    	movimiento(ruta, objeto, velInicia);
    	velInicia += 4000;
    }
    //console.log("Hola mundo");
    function nom_div(div)
    {
        return document.getElementById(div);
    }
}
