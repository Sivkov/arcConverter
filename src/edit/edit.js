 class Edit {

    constructor() {
        // Initialize class properties
        this.svg = null;
        this.brick = null;
        this.offset = { x: 0, y: 0 };
      }
  

    makeDraggable(evt) {
        this.svg = document.getElementById("svg")
        this.svg.addEventListener('mousemove', this.drag);
        this.svg.addEventListener('mousestop', this.drag);
        this.svg.addEventListener('mouseup', this.endDrag);
        this.svg.addEventListener('mouseleave', this.endDrag);
        this.brick = document.querySelector('#group1')
        this.startDrag(evt);
    }

    startDrag = (evt) => {
        if (evt.target) {
            this.offset = this.getMousePosition(evt);
            this.transforms = document.querySelector('#group1').transform.baseVal.consolidate().matrix
            this.offset.x -= this.transforms.e;
            this.offset.y -= this.transforms.f;
        }
    }

    drag =(evt) => {
        var coord = this.getMousePosition(evt);
        let matrix =this.brick.transform.baseVal.consolidate().matrix
        matrix.e = (coord.x - this.offset.x)
        matrix.f = (coord.y - this.offset.y)
    }

    endDrag = (evt) => {
        this.svg.removeEventListener('mousemove', this.drag);
        this.svg.removeEventListener('mousestop', this.drag);
        this.svg.removeEventListener('mouseup', this.endDrag);
        this.svg.removeEventListener('mouseleave', this.endDrag); 
    }

    getMousePosition(evt) {
    var CTM = this.svg.getScreenCTM();
        let coord
        return    coord = {
            x: (evt.clientX + CTM.f)/ CTM.a,
            y: (evt.clientY + CTM.e)/ CTM.d
        }; 
    }
}

let edit = new Edit()
export default edit;



  