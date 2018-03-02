import React from 'react';
import Dygraph from 'dygraphs';

class DygraphsChart extends React.Component {
  shouldComponentUpdate(){
    return false;
  }
  render() {
    return <div ref="chart" style={{width:'960px', height:'500px'}}></div>;
  }

  componentDidMount() {
    let self = this;
    //let i = 1;
    let data = [[new Date(),Math.random()]];

    let g = new Dygraph(this.refs.chart, data, {
      /* options */
      // width: '1500',
      // height: '700',
      axes : {
        // x : {
        //   drawAxis : false,
        //   drawGrid : false,
        //   //gridLineColor : this.xAxisLineColor
        // },
        // y : {
        //   drawAxis : false,
        //   drawGrid : false,
        //   //gridLineColor : this.yAxisLineColor
        // }
      },
    });

    window.intervalId = setInterval(function() {
      var x = new Date();  // current time
      var y = Math.random();
      if(data.length > 2000)
        data.shift()
      data.push([x, y]);
      g.updateOptions( { 'file': data } );
      //i++;
    }, 100);
    console.log(data)
  }
}

export default DygraphsChart