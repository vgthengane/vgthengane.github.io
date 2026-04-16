$(document).ready(function() {
  $(".news-collapsible").each(function() {
    var $container = $(this);
    var $items = $container.find(".news-list > li");
    var $button = $container.find(".news-toggle");
    var $wrap = $container.find(".news-list-wrap");
    var visibleItems = parseInt($container.data("visible-items"), 10) || 7;

    if ($items.length <= visibleItems) {
      $container.addClass("is-expanded");
      $button.hide();
      return;
    }

    var collapsedHeight = 0;
    $items.slice(0, visibleItems).each(function() {
      collapsedHeight += $(this).outerHeight(true);
    });

    collapsedHeight += 8;
    $wrap.css("--collapsed-height", collapsedHeight + "px");

    $button.on("click", function() {
      var expanded = $container.hasClass("is-expanded");
      var nextExpanded = !expanded;
      var targetHeight = nextExpanded ? $wrap[0].scrollHeight : collapsedHeight;

      $container.toggleClass("is-expanded", nextExpanded);
      $button.attr("aria-expanded", nextExpanded.toString());
      $button.text(nextExpanded ? "Show less" : "Show more");
      $wrap.css("max-height", targetHeight + "px");
    });
  });
});
