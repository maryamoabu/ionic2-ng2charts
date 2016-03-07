import {Page} from 'ionic-angular';
import {CHART_DIRECTIVES} from '../../charts'; // Import CHART_DIRECTIVES here

@Page({
  templateUrl: 'build/pages/main/main.html',
  directives: [CHART_DIRECTIVES] // Include CHART_DIRECTIVES here
})
export class MainPage {

  private lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90],
    [18, 48, 77, 9, 100, 27, 40]
  ];
  private lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  private lineChartSeries:Array<any> = ['Series A', 'Series B', 'Series C'];
  private lineChartOptions:any = {
    animation: true,
    responsive: true,
    multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>'
  };
  private lineChartColours:Array<any>;
  private lineChartLegend:boolean = true;
  private lineChartType:string = 'Line';

  constructor() {

    /**
     * Set initial chart colors.
     */
    this.lineChartColours = this.getColours(['#FF9800','#49cd97','#ef2e0a']);

  }

  /**
   * Creates an RGBA from RGB
   * @param colour
   * @param alpha
   * @returns {string}
   */
  rgba (colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
  }

  /**
   * Converts color from HEX to RGB
   * @param hex
   * @returns {number[]}
   */
  hexToRgb (hex) {
    var bigint = parseInt(hex.substr(1), 16),
      r = (bigint >> 16) & 255,
      g = (bigint >> 8) & 255,
      b = bigint & 255;

    return [r, g, b];
  }

  /**
   * Gets a set of colors to be used in the chart from a predefined HEX color
   * @param colour
   * @returns {{fillColor: string, strokeColor: string, pointColor: string, pointStrokeColor: string, pointHighlightFill: string, pointHighlightStroke: string}}
   */
  getColour (colour) {
    return {
      fillColor: this.rgba(colour, 0.2),
      strokeColor: this.rgba(colour, 1),
      pointColor: this.rgba(colour, 1),
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: this.rgba(colour, 0.8)
    };
  }

  /**
   * Imports RGB colors from HEX colors specified earlier
   * @param colours
   * @returns {Array}
   */
  getColours (colours) {
    let _clrs = [];
    colours.forEach(
      color => {
        _clrs.push(this.getColour(this.hexToRgb(color)));
      }
    );
    return _clrs;
  }

  /**
   * A function to randomize the data displayed in the chart
   */
  private randomize() {
    let _lineChartData = [];
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = [];
      for (let j = 0; j < this.lineChartData[i].length; j++) {
        _lineChartData[i].push(Math.floor((Math.random() * 100) + 1));

      }
    }
    this.lineChartData = _lineChartData;
  }


  /**
   * Chart click event handler
   * @param e
   */
  chartClicked(e:any) {
    console.log(e);
  }

  /**
   * Chart hover event handler (browser only)
   * @param e
   */
  chartHovered(e:any) {
    console.log(e);
  }

}
