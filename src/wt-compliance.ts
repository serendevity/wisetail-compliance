import Highcharts from 'highcharts';
class WisetailCompliance extends HTMLElement {
  constructor() {
    super();

  }
  connectedCallback() {
    // Generate the chart
    Highcharts.chart(this, {
      title: { text: "Wisetail Developer Spread" },
      xAxis: { categories: ['LMS', 'AdminTool', 'API'] },
      yAxis: { title: { text: 'Developers' } },
      series: [{
        name : 'Number of Developers',
        type: "line",
        data: [5, 2, 4]
      }]
    });
  }
}
window.customElements.define('wt-compliance', WisetailCompliance);
