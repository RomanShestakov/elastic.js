  /**
    @class
    <p>A multi-value metrics aggregation that computes stats over numeric values
    extracted from the aggregated documents. These values can be extracted either
    from specific numeric fields in the documents, or be generated by a provided
    script.</p>

    <p>The stats that are returned consist of: min, max, sum, count and avg.</p>

    @name ejs.StatsAggregation
    @ejs aggregation
    @borrows ejs.MetricsAggregationMixin.field as field
    @borrows ejs.MetricsAggregationMixin.script as script
    @borrows ejs.MetricsAggregationMixin.lang as lang
    @borrows ejs.MetricsAggregationMixin.scriptValuesSorted as scriptValuesSorted
    @borrows ejs.MetricsAggregationMixin.params as params
    @borrows ejs.AggregationMixin._type as _type
    @borrows ejs.AggregationMixin.toJSON as toJSON

    @desc
    <p>Aggregation that computes stats over numeric values extracted from the
    aggregated documents.</p>

    @param {String} name The name which be used to refer to this aggregation.

    */
  ejs.StatsAggregation = function (name) {

    var
      _common = ejs.MetricsAggregationMixin(name, 'stats'),
      agg = _common.toJSON();

    return _common;
  };
