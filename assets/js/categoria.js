$(document).ready(function () {
	$('[b2018], [b2017], [b2016]').hide();

	$("[b2020]").click(function () {
		$("[b2019], [b2018],  [b2017],  [b2016],  [bmais], [2019], [2018], [2017], [2016], [2015], [2014], [2013], [2012], [2011], [2010], [2009], [2008], [2007], [2006], [2005], [2004], [2003], [2002], [2001], [2000], [reliquia]").slideUp(1000);

	});

	$("[b2019]").click(function () {
		$("[b2020], [b2018],  [b2017],  [b2016],  [bmais], [2020], [2018], [2017], [2016], [2015], [2014], [2013], [2012], [2011], [2010], [2009], [2008], [2007], [2006], [2005], [2004], [2003], [2002], [2001], [2000], [reliquia]").slideUp(1000);
	})

	$("[b2018]").click(function () {
		$("[b2020], [b2019],  [b2017], [b2016],  [bmais], [2020], [2019], [2017], [2016], [2015], [2014], [2013], [2012], [2011], [2010], [2009], [2008], [2007], [2006], [2005], [2004], [2003], [2002], [2001], [2000], [reliquia]").slideUp(1000);
	})

	$("[b2017]").click(function () {
		$("[b2020], [b2019],  [b2018], [b2016],  [bmais], [2020], [2019], [2018], [2016], [2015], [2014], [2013], [2012], [2011], [2010], [2009], [2008], [2007], [2006], [2005], [2004], [2003], [2002], [2001], [2000], [reliquia]").slideUp(1000);
	})
	$("[b2016]").click(function () {
		$("[b2020], [b2019],  [b2018], [b2017], [bmais], [2020], [2019], [2018], [2017], [2015], [2014], [2013], [2012], [2011], [2010], [2009], [2008], [2007], [2006], [2005], [2004], [2003], [2002], [2001], [2000], [reliquia]").slideUp(1000);
	})

	$("[todos]").click(function () {
		$("[b2020], [b2019], [bmais], [2020], [2019], [2018], [2017], [2016], [2015], [2014], [2013], [2012], [2011], [2010], [2009], [2008], [2007], [2006], [2005], [2004], [2003], [2002], [2001], [2000], [reliquia]").slideDown(1000);
		$("[b2018], [b2017], [b2016]").hide();
	})

	$("[bmais]").click(function () {
		$("[b2017], [b2018], [b2016]").slideDown(1000);
		$("[bmais]").slideUp(1000)
	})

})

//Carregar Mais POstagens

$(function () {
  num_posts_show = 20;
  speed_to_top = 1000; // in ms
  
    $(".style1, .style2, .style3, .style4, .style5, .style6").slice(0, num_posts_show).show();
   
    $("#loadmore").on('click', function (e) {
        e.preventDefault();
        $("article:hidden").slice(0, num_posts_show).slideDown();
        if ($("article").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('#totop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, speed_to_top);
    return false;
});

