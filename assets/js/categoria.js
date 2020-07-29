$(document).ready(function () {
	$('[b2018], [b2017], [b2016], [b2015], [b2014], [b2013], [b2012], [b2011], [b2010], [b2009], [b2008], [b2007], [b2006],[b2005], [b2004], [b2003], [b2002], [b2001], [b2000], [bmais1]').hide();

	$("[todos]").click(function (){
		$("section").children().slideDown(1000)
		$("[b2018], [b2017], [b2016], [b2015], [b2014], [b2013], [b2012], [b2011], [b2010], [b2009], [b2008], [b2007], [b2006],[b2005], [b2004], [b2003], [b2002], [b2001], [b2000],  	 [bmais1]").slideUp(1000);
		$("[bmais]").slideDown(1000)
	});

	$("[b2020]").click(function () {
		$("section").children().slideUp(1000);
		$("[2020]").slideDown(1000);
	});
	$("[b2019]").click(function () {
		$("section").children().slideUp(1000);
		$("[2019]").slideDown(1000);
		$("[b2019]").slideDown(1000);
	});
	
	$("[b2018]").click(function () {
		$("section").children().slideUp(1000);
		$("[2018]").slideDown(1000);
	});
	
	$("[b2017]").click(function () {
		$("section").children().slideUp(1000);
		$("[2017]").slideDown(1000);
	});

	
	$("[b2016]").click(function () {
		$("section").children().slideUp(1000);
		$("[2016]").slideDown(1000);
	});
	
	
	$("[b2015]").click(function () {
		$("section").children().slideUp(1000);
		$("[2015]").slideDown(1000);
	});
	
	$("[b2014]").click(function () {
		$("section").children().slideUp(1000);
		$("[2014]").slideDown(1000);
	});

	$("[b2013]").click(function () {
		$("section").children().slideUp(1000);
		$("[2013]").slideDown(1000);
	});
	$("[b2012]").click(function () {
		$("section").children().slideUp(1000);
		$("[2012]").slideDown(1000);
	});
	$("[b2011]").click(function () {
		$("section").children().slideUp(1000);
		$("[2011]").slideDown(1000);
	});
	$("[b2010]").click(function () {
		$("section").children().slideUp(1000);
		$("[2010]").slideDown(1000);
	});
	$("[b2009]").click(function () {
		$("section").children().slideUp(1000);
		$("[2009]").slideDown(1000);
	});
	$("[b2008]").click(function () {
		$("section").children().slideUp(1000);
		$("[2008]").slideDown(1000);
	});
	$("[b2007]").click(function () {
		$("section").children().slideUp(1000);
		$("[2007]").slideDown(1000);
	});

	$("[b2006]").click(function () {
		$("section").children().slideUp(1000);
		$("[2006]").slideDown(1000);
	});
	$("[b2005]").click(function () {
		$("section").children().slideUp(1000);
		$("[2005]").slideDown(1000);
	});
	$("[b2004]").click(function () {
		$("section").children().slideUp(1000);
		$("[2004]").slideDown(1000);
	});
	$("[b2003]").click(function () {
		$("section").children().slideUp(1000);
		$("[2003]").slideDown(1000);
	});
	$("[b2002]").click(function () {
		$("section").children().slideUp(1000);
		$("[2001]").slideDown(1000);
	});
	$("[b2000]").click(function () {
		$("section").children().slideUp(1000);
		$("[2000]").slideDown(1000);
	});
	

	$("[bmais]").click(function () {
		$("[b2017], [b2018], [b2016]").slideDown(1000);
		$(this).slideUp(1000)
		$("[bmais1]").slideDown(1000)
	})


	$("[bmais1]").click(function () {
		$("[b2015], [b2014], [b2013], [b2012], [b2011], [b2010], [b2009], [b2008], [b2007], [b2006],[b2005], [b2004], [b2003], [b2002], [b2001], [b2000]").slideDown(1000);
		$(this).slideUp(1000)
		
	})
	
})

