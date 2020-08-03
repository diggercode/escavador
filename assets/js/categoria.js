$('[bDC90], [b2018], [b2017], [b2016], [b2015], [b2014], [b2013], [b2012], [b2011], [b2010], [b2009], [b2008], [b2007], [b2006],[b2005], [b2004], [b2003], [b2002], [b2001], [b2000], [bmais1]').hide();

$(document).ready(function () {
	

	$("[todos]").click(function (){
		$("section").children().slideDown(1000)
		$(" [carregamais], [bDC90], [b2018], [b2017], [b2016], [b2015], [b2014], [b2013], [b2012], [b2011], [b2010], [b2009], [b2008], [b2007], [b2006],[b2005], [b2004], [b2003], [b2002], [b2001], [b2000],  	 [bmais1]").slideUp(1000);
		$("[bmais]").slideDown(1000)
	});

	$("[b2020]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2020]").slideDown(1000);
	});
	$("[b2019]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2019]").slideDown(1000);
		$("[b2019]").slideDown(1000);
	});
	
	$("[b2018]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2018]").slideDown(1000);
	});
	
	$("[b2017]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2017]").slideDown(1000);
	});

	
	$("[b2016]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2016]").slideDown(1000);
	});
	
	
	$("[b2015]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2015]").slideDown(1000);
	});
	
	$("[b2014]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2014]").slideDown(1000);
	});

	$("[b2013]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2013]").slideDown(1000);
	});
	$("[b2012]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2012]").slideDown(1000);
	});
	$("[b2011]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2011]").slideDown(1000);
	});
	$("[b2010]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2010]").slideDown(1000);
	});
	$("[b2009]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2009]").slideDown(1000);
	});
	$("[b2008]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2008]").slideDown(1000);
	});
	$("[b2007]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2007]").slideDown(1000);
	});

	$("[b2006]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2006]").slideDown(1000);
	});
	$("[b2005]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2005]").slideDown(1000);
	});
	$("[b2004]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2004]").slideDown(1000);
	});
	$("[b2003]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2003]").slideDown(1000);
	});
	$("[b2002]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2002]").slideDown(1000);
	});

	$("[b2001]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2001]").slideDown(1000);
	});

	$("[b2000]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[2000]").slideDown(1000);
	});
	

	$("[bmais]").click(function () {
		$("[b2017], [b2018], [b2016]").slideDown(1000);
		$("[bmais]").slideUp(1000)
		$("[bmais1]").slideDown(1000)
	})


	$("[bmais1]").click(function () {
		$("[bDC90], [b2015], [b2014], [b2013], [b2012], [b2011], [b2010], [b2009], [b2008], [b2007], [b2006],[b2005], [b2004], [b2003], [b2002], [b2001], [b2000]").slideDown(1000);
		$("[bmais1]").slideUp(1000)
		
	})
	$("[bDC90]").click(function () {
		$("[carregamais]").hide();
		$("section").children().slideUp(1000);
		$("[1999], [1998], [1997], [1996], [1995], [1994], [1993], [1992], [1991], [1990],[1989], [1988], [1987], [1986], [1985], [decada708090] , [1983], [1982], [1981], [1980], [1960]").slideDown(1000);
		
		
	})

	
	
})

/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/   

$(function () {
    $("article").slice(0, 12).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("article:hidden").slice(0, 12).slideDown();
        if ($("article:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(scrollTop).offset().top
        }, 1500);
    });
});

