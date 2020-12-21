@extends('backendlayout.main') 
@section('title')
<title>Welcome to admin panel</title>
@endsection
@section('content')
	<div class="layout-content">
        <div class="layout-content-body">
          <div class="title-bar">
            <div class="title-bar-actions">
              <select class="selectpicker dropdown" name="period" data-dropdown-align-right="true" data-style="btn-default btn-sm" data-width="fit">
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="last_7d" selected="selected">Last 7 days</option>
                <option value="last_1m">Last 30 days</option>
                <option value="last_3m">Last 90 days</option>
              </select>
            </div>
            <h1 class="title-bar-title">
              <span class="d-ib">Dashboard</span>
              <span class="d-ib">
                <a class="title-bar-shortcut" href="dashboard-1.html#" title="Add to shortcut list" data-container="body" data-toggle-text="Remove from shortcut list" data-trigger="hover" data-placement="right" data-toggle="tooltip">
                  <span class="sr-only">Add to shortcut list</span>
                </a>
              </span>
            </h1>
            <p class="title-bar-description">
              <small>You can personalize your dashboard by using <a href="widgets.html">widgets</a>.</small>
            </p>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-6 col-md-3">
              <div class="card">
                <div class="card-values">
                  <div class="p-x">
                    <small>Visitors</small>
                    <h3 class="card-title fw-l">185,118</h3>
                  </div>
                </div>
                <div class="card-chart">
                  <canvas data-chart="line" data-animation="false" data-labels='["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"]' data-values='[{"backgroundColor": "rgba(39, 174, 96, 0.03)", "borderColor": "#27ae60", "data": [25250, 23370, 25568, 28961, 26762, 30072, 25135]}]' data-scales='{"yAxes": [{ "ticks": {"max": 32327}}]}' data-hide='["legend", "points", "scalesX", "scalesY", "tooltips"]' height="35"></canvas>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="card">
                <div class="card-values">
                  <div class="p-x">
                    <small>New visitors</small>
                    <h3 class="card-title fw-l">68,494</h3>
                  </div>
                </div>
                <div class="card-chart">
                  <canvas data-chart="line" data-animation="false" data-labels='["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"]' data-values='[{"backgroundColor": "rgba(39, 174, 96, 0.03)", "borderColor": "#27ae60", "data": [8796, 11317, 8678, 9452, 8453, 11853, 9945]}]' data-scales='{"yAxes": [{ "ticks": {"max": 12742}}]}' data-hide='["legend", "points", "scalesX", "scalesY", "tooltips"]' height="35"></canvas>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="card">
                <div class="card-values">
                  <div class="p-x">
                    <small>Pageviews</small>
                    <h3 class="card-title fw-l">925,590</h3>
                  </div>
                </div>
                <div class="card-chart">
                  <canvas data-chart="line" data-animation="false" data-labels='["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"]' data-values='[{"backgroundColor": "rgba(39, 174, 96, 0.03)", "borderColor": "#27ae60", "data": [116196, 145160, 124419, 147004, 134740, 120846, 137225]}]' data-scales='{"yAxes": [{ "ticks": {"max": 158029}}]}' data-hide='["legend", "points", "scalesX", "scalesY", "tooltips"]' height="35"></canvas>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="card">
                <div class="card-values">
                  <div class="p-x">
                    <small>Average duration</small>
                    <h3 class="card-title fw-l">00:07:56</h3>
                  </div>
                </div>
                <div class="card-chart">
                  <canvas data-chart="line" data-animation="false" data-labels='["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"]' data-values='[{"backgroundColor": "rgba(39, 174, 96, 0.03)", "borderColor": "#27ae60", "data": [13590442, 12362934, 13639564, 13055677, 12915203, 11009940, 11542408]}]' data-scales='{"yAxes": [{ "ticks": {"max": 14662531}}]}' data-hide='["legend", "points", "scalesX", "scalesY", "tooltips"]' height="35"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-12 col-md-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Audience Overview</h4>
                </div>
                <div class="card-body">
                  <div class="card-chart">
                    <canvas data-chart="line" data-animation="false" data-labels='["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]' data-values='[{"label": "This week", "backgroundColor": "transparent", "borderColor": "#27ae60", "pointBackgroundColor": "#27ae60", "data": [29432, 20314, 17665, 22162, 31194, 35053, 29298]}, {"label": "Last week", "backgroundColor": "transparent", "borderColor": "#c91f37", "pointBackgroundColor": "#c91f37", "data": [9956, 22607, 30963, 22668, 16338, 22222, 39238]}]' data-tooltips='{"mode": "label"}' data-hide='["gridLinesX", "legend"]' height="150"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">19,429 Signups</h4>
                </div>
                <div class="card-body">
                  <div class="card-chart">
                    <canvas data-chart="bar" data-animation="false" data-labels='["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]' data-values='[{"label": "This week", "backgroundColor": "#27ae60", "borderColor": "#27ae60", "data": [3089, 2132, 1854, 2326, 3274, 3679, 3075]}, {"label": "Last week", "backgroundColor": "#c91f37", "borderColor": "#c91f37", "data": [983, 2232, 3057, 2238, 1613, 2194, 3874]}]' data-tooltips='{"mode": "label"}' data-hide='["gridLinesX", "legend"]' height="150"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="media">
                    <div class="media-middle media-left">
                      <span class="bg-gray sq-64 circle">
                        <span class="icon icon-flag"></span>
                      </span>
                    </div>
                    <div class="media-middle media-body">
                      <h3 class="media-heading">
                        <span class="fw-l">1,256 Issues</span>
                        <span class="fw-b fz-sm text-danger">
                          <span class="icon icon-caret-up"></span>
                          15%
                        </span>
                      </h3>
                      <small>6 issues are unassigned</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="media">
                    <div class="media-middle media-left">
                      <div class="media-chart">
                        <canvas data-chart="doughnut" data-animation="false" data-labels='["Resolved", "Unresolved"]' data-values='[{"backgroundColor": ["#27ae60", "#384243"], "data": [879, 377]}]' data-hide='["legend", "scalesX", "scalesY", "tooltips"]' height="64" width="64"></canvas>
                      </div>
                    </div>
                    <div class="media-middle media-body">
                      <h2 class="media-heading">
                        <span class="fw-l">879</span>
                        <small>Resolved</small>
                      </h2>
                      <small>More than 70% resolved issues</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="media">
                    <div class="media-middle media-left">
                      <div class="media-chart">
                        <canvas data-chart="doughnut" data-animation="false" data-labels='["Resolved", "Unresolved"]' data-values='[{"backgroundColor": ["#384243", "#27ae60"], "data": [879, 377]}]' data-hide='["legend", "scalesX", "scalesY", "tooltips"]' height="64" width="64"></canvas>
                      </div>
                    </div>
                    <div class="media-middle media-body">
                      <h2 class="media-heading">
                        <span class="fw-l">377</span>
                        <small>Unresolved</small>
                      </h2>
                      <small>Less than 30% unresolved issues</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
@endsection
