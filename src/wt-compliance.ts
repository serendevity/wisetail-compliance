import Highcharts from 'highcharts';
class WisetailCompliance extends HTMLElement {
  constructor() {
    super();

  }
  connectedCallback() {
    // Generate the chart
    Highcharts.chart(this, {
      chart: { type: 'bar' },
      title: { text: "Wisetail Compliance" },
      xAxis: { categories: ['LMS', 'AdminTool', 'API'] },
      yAxis: { title: { text: 'Developers' } },
      series: [{
        type: "line",
        data: [1, 2, 3]
      }]
    });
  }
}
window.customElements.define('wt-compliance', WisetailCompliance);
