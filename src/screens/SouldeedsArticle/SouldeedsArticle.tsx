import { ClockIcon, UsersIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const SouldeedsArticle = (): JSX.Element => {
  const topReadsData = [
    {
      image: "/unsplash-lq-sowqdk84.png",
      title: "How to Balance Faith & Love in Today's World",
      description: "Explore Faith, Values, and Meaningful Connections",
      category: "Faith & Lifestyle",
      author: "Admin",
      date: "21, July",
      comments: "10+",
    },
    {
      image: "/unsplash-lq-sowqdk84-1.png",
      title: "5 Signs of a Meaningful Relationship",
      description: "Explore Faith, Values, and Meaningful Connections",
      category: "Faith & Lifestyle",
      author: "Admin",
      date: "21, July",
      comments: "10+",
    },
    {
      image: "/unsplash-lq-sowqdk84-2.png",
      title: "Why Serving Together Builds Stronger Bonds?",
      description: "Explore Faith, Values, and Meaningful Connections",
      category: "Faith & Lifestyle",
      author: "Admin",
      date: "21, July",
      comments: "10+",
    },
    {
      image: "/unsplash-lq-sowqdk84-3.png",
      title: "Explore Faith, Values, and Meaningful Connections",
      description: "Explore Faith, Values, and Meaningful Connections",
      category: "Faith & Lifestyle",
      author: "Admin",
      date: "21, July",
      comments: "10+",
    },
  ];

  const categoryFilters = [
    { name: "All", active: true, variant: "default" },
    { name: "Faith & Values", active: false, variant: "outline" },
    { name: "Relationships", active: false, variant: "outline" },
    { name: "Community & Service", active: false, variant: "outline" },
    { name: "Personal Growth", active: false, variant: "outline" },
    { name: "Faith & Lifestyle", active: false, variant: "outline" },
  ];

  const latestArticles = [
    {
      image: "/rectangle-22879.png",
      title: "How to Build a Profile That Reflects Your True Self",
      description: "Explore Faith, Values, and Meaningful Connections",
      category: "Faith & Lifestyle",
      author: "Admin",
      date: "21, July",
      comments: "10+",
    },
    {
      image: "/rectangle-22880.png",
      title: "Practicing Gratitude in Relationships",
      description: "Explore Faith, Values, and Meaningful Connections",
      category: "Faith & Lifestyle",
      author: "Admin",
      date: "21, July",
      comments: "10+",
    },
    {
      image: "/rectangle-22881.png",
      title: "The Role of Service in Building Lasting Bonds",
      description: "Explore Faith, Values, and Meaningful Connections",
      category: "Faith & Lifestyle",
      author: "Admin",
      date: "21, July",
      comments: "10+",
    },
  ];

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Groups", href: "#" },
    { name: "How it Works", href: "#" },
  ];

  return (
    <div className="bg-[#ffffff] overflow-hidden w-full max-w-none relative">
      {/* Background decorative elements */}
      <div className="absolute top-[829px] left-[1391px] w-[485px] h-[497px] rounded-[242.5px/248.5px] blur-[50px] [background:conic-gradient(from_180deg_at_50%_50%,rgba(185,218,251,0.2)_0%,rgba(152,149,238,0.2)_0%,rgba(197,84,146,0.2)_0%,rgba(236,172,173,0.2)_27%)] opacity-70" />
      <div className="absolute top-[1326px] left-[-108px] w-[485px] h-[497px] rounded-[242.5px/248.5px] blur-[50px] [background:conic-gradient(from_180deg_at_50%_50%,rgba(185,218,251,0.2)_0%,rgba(152,149,238,0.2)_0%,rgba(197,84,146,0.2)_0%,rgba(236,172,173,0.2)_27%)] opacity-70" />
      <div className="absolute top-[2929px] left-[51px] w-[485px] h-[497px] rounded-[242.5px/248.5px] blur-[50px] [background:conic-gradient(from_180deg_at_50%_50%,rgba(185,218,251,0.2)_0%,rgba(152,149,238,0.2)_0%,rgba(197,84,146,0.2)_0%,rgba(236,172,173,0.2)_27%)] opacity-70" />
      <div className="absolute top-[2929px] left-[1433px] w-[485px] h-[497px] rounded-[242.5px/248.5px] blur-[50px] [background:conic-gradient(from_180deg_at_50%_50%,rgba(185,218,251,0.2)_0%,rgba(152,149,238,0.2)_0%,rgba(197,84,146,0.2)_0%,rgba(236,172,173,0.2)_27%)] opacity-70" />

      {/* Navigation Header */}
      <header className="flex w-full items-center justify-between px-[25px] py-2.5 bg-basewhite shadow-shadow-nav-shadown relative z-10">
        <div className="flex items-center gap-[61px] px-0 py-2.5">
          <img
            className="w-[175px] h-[50px] object-cover"
            alt="Add a heading"
            src="/add-a-heading--6--1.svg"
          />
          <nav className="flex items-center gap-[61px]">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]"
              >
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#4a5568] text-lg tracking-[0] leading-[25px] whitespace-nowrap">
                  {item.name}
                </div>
              </div>
            ))}
          </nav>
        </div>
        <Button className="w-[296px] h-[54px] bg-[#87127c] rounded-[10px] h-auto">
          <div className="relative w-[230px] [font-family:'Inter',Helvetica] font-bold text-neutral-50 text-lg text-center tracking-[0] leading-[14px]">
            Sign Up for Early Access
          </div>
        </Button>
      </header>

      {/* Main Content Container */}
      <div className="max-w-[1500px] mx-auto">
        {/* Featured Article Section */}
        <section className="flex flex-col items-start gap-[5px] mt-[87px] mb-[34px]">
          <div className="relative h-[51px] [font-family:'Inter',Helvetica] font-bold text-transparent text-[40px] tracking-[0] leading-[45.6px] whitespace-nowrap">
            <span className="text-black">Featured </span>
            <span className="text-[#87127c]">Article</span>
          </div>
          <div className="relative w-[35px] h-[3px] bg-[#87127c] rounded-[999px]" />
        </section>

        <Card className="flex flex-col w-full h-[688px] items-start justify-end gap-2.5 p-10 mb-[116px] rounded-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.5)_100%),url(/frame-9.png)] bg-cover bg-center border-0">
          <CardContent className="p-0">
            <div className="flex w-[278px] items-center gap-6 relative flex-[0_0_auto]">
              <Badge className="w-[124px] h-[31px] bg-[#fffffff5] rounded-[38px] border border-solid border-[#87127c] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                <div className="[font-family:'Inter',Helvetica] font-medium text-[#87127c] text-xs tracking-[0] leading-[13.7px] whitespace-nowrap">
                  Faith & Lifestyle
                </div>
              </Badge>
              <img
                className="relative w-10 h-px object-cover"
                alt="Line"
                src="/line-1.svg"
              />
              <div className="relative w-fit mr-[-25.00px] font-body-base-medium font-[number:var(--body-base-medium-font-weight)] text-white text-[length:var(--body-base-medium-font-size)] tracking-[var(--body-base-medium-letter-spacing)] leading-[var(--body-base-medium-line-height)] whitespace-nowrap [font-style:var(--body-base-medium-font-style)]">
                9 Sep, 2025
              </div>
            </div>
            <div className="relative w-[924px] [font-family:'Inter',Helvetica] font-medium text-white text-[44px] tracking-[0] leading-[57.2px]">
              The Role of Service in Building Lasting Bonds
            </div>
          </CardContent>
        </Card>

        {/* Top Reads Section */}
        <section className="mb-[116px]">
          <div className="flex items-center justify-between w-full mb-[82px]">
            <div className="flex items-center gap-4">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-transparent text-[50px] tracking-[0] leading-[57.0px] whitespace-nowrap">
                <span className="text-black">Top </span>
                <span className="text-[#87127c]">Reads</span>
              </h2>
            </div>
            <Button
              variant="outline"
              className="w-[226px] h-[65px] border-[#87127c] text-[#87127c] rounded-[50px] shadow-btn-shadow h-auto"
            >
              <div className="relative w-fit [font-family:'Roboto',Helvetica] font-bold text-[22px] tracking-[0] leading-[14px] whitespace-nowrap">
                See All
              </div>
            </Button>
          </div>
          <div className="w-[81px] h-[5px] bg-[#87127c] mb-[43px]" />

          <div className="grid grid-cols-4 gap-[42px]">
            {topReadsData.map((article, index) => (
              <Card
                key={index}
                className="w-full max-w-[349px] h-[425px] flex flex-col gap-[2.6px] shadow-[0px_20px_59.1px_-40px_#00000040]"
              >
                <img
                  className="w-full h-[223.79px] rounded-[20px_20px_0px_0px] object-cover"
                  alt="Article"
                  src={article.image}
                />
                <CardContent className="h-[199px] bg-[#ffffff] rounded-[0px_0px_20px_20px] p-6 relative">
                  <Badge className="absolute top-[25px] left-[25px] w-[122px] h-[31px] bg-[#ffffff] rounded-[38px] shadow-[0px_4px_27.3px_-5px_#00000040]">
                    <div className="[font-family:'Inter',Helvetica] font-medium text-[#87127c] text-xs tracking-[0] leading-[13.7px] whitespace-nowrap">
                      {article.category}
                    </div>
                  </Badge>
                  <div className="absolute top-[79px] left-[26px] right-[26px]">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-black text-xl tracking-[0] leading-7 mb-4">
                      {article.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#818181] text-base tracking-[0] leading-[18.2px] mb-6">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#000000bf] text-base tracking-[0] leading-[18.2px]">
                          By{" "}
                        </span>
                        <span className="font-bold text-[#87127c]">
                          {article.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-[18px] h-[18px]" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#000000bf] text-sm tracking-[0] leading-[16.0px]">
                          {article.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <UsersIcon className="w-[18px] h-[18px]" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#000000bf] text-sm tracking-[0] leading-[16.0px]">
                          {article.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-[94px] gap-[13.7px]">
            <div className="w-[13.67px] h-[13.67px] bg-[#87127c] rounded-[6.83px]" />
            <div className="w-[8.3px] h-[8.3px] bg-[#87127c] rounded-[4.15px] mt-[2.4px]" />
            <div className="w-[8.3px] h-[8.3px] bg-[#87127c] rounded-[4.15px] mt-[2.4px]" />
          </div>
        </section>

        {/* Latest Articles Section */}
        <section className="mb-[116px]">
          <div className="flex items-center justify-between w-full mb-[82px]">
            <div className="flex items-center gap-4">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-transparent text-[50px] tracking-[0] leading-[57.0px] whitespace-nowrap">
                <span className="text-black">Latest </span>
                <span className="text-[#87127c]">Articles</span>
              </h2>
            </div>
            <Button
              variant="outline"
              className="w-[226px] h-[65px] border-[#87127c] text-[#87127c] rounded-[50px] shadow-btn-shadow h-auto"
            >
              <div className="relative w-fit [font-family:'Roboto',Helvetica] font-bold text-[22px] tracking-[0] leading-[14px] whitespace-nowrap">
                See All
              </div>
            </Button>
          </div>
          <div className="w-[81px] h-[5px] bg-[#87127c] mb-[63px]" />

          {/* Category filters */}
          <div className="flex gap-[15px] mb-[123px] flex-wrap">
            {categoryFilters.map((filter, index) => (
              <Button
                key={index}
                variant={filter.active ? "default" : "outline"}
                className={`h-[65px] px-[30px] py-[19px] rounded-[50px] shadow-btn-shadow h-auto ${
                  filter.active
                    ? "bg-[#87127c] text-[#ffffff] border-[#87127c]"
                    : "border-[#7a7a7a] text-[#454545]"
                }`}
              >
                <div className="relative w-fit [font-family:'Roboto',Helvetica] font-bold text-[22px] tracking-[0] leading-[14px] whitespace-nowrap">
                  {filter.name}
                </div>
              </Button>
            ))}
          </div>

          {/* Articles grid */}
          <div className="flex gap-[63px]">
            {/* Main article */}
            <div className="flex-1">
              <img
                className="w-full max-w-[699px] h-[381px] rounded-[20px] object-cover mb-[57px]"
                alt="Rectangle"
                src="/rectangle-22877.png"
              />
              <Badge className="w-[124px] h-[31px] bg-[#ffffff] rounded-[38px] border border-solid border-[#e4e4e4] mb-[49px]">
                <div className="[font-family:'Inter',Helvetica] font-medium text-[#87127c] text-xs tracking-[0] leading-[13.7px] whitespace-nowrap">
                  Faith & Lifestyle
                </div>
              </Badge>
              <h3 className="max-w-[664px] [font-family:'Inter',Helvetica] font-semibold text-[#1a202c] text-[28px] tracking-[0] leading-[35px] mb-[81px]">
                Halal Dating vs. Soulful Marriage: Understanding the Difference
              </h3>
              <p className="font-normal text-[#1a202c] text-lg leading-5 whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0] mb-[40px]">
                Explore Faith, Values, and Meaningful Connections
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#000000bf] text-base tracking-[0] leading-[18.2px]">
                    By{" "}
                  </span>
                  <span className="font-bold text-[#87127c]">Admin</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-[18px] h-[18px]" />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#000000bf] text-sm tracking-[0] leading-[16.0px]">
                    21, July
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <UsersIcon className="w-[18px] h-[18px]" />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#000000bf] text-sm tracking-[0] leading-[16.0px]">
                    10+
                  </span>
                </div>
              </div>
            </div>

            {/* Side articles */}
            <div className="flex flex-col gap-[207px]">
              {latestArticles.map((article, index) => (
                <div key={index} className="flex gap-[37px]">
                  <img
                    className="w-[221px] h-[180px] rounded-[20px] object-cover flex-shrink-0"
                    alt="Rectangle"
                    src={article.image}
                  />
                  <div className="flex-1">
                    <Badge className="w-[122px] h-[31px] bg-[#ffffff] rounded-[38px] border border-solid border-[#e4e4e4] mb-[25px]">
                      <div className="[font-family:'Inter',Helvetica] font-medium text-[#87127c] text-xs tracking-[0] leading-[13.7px] whitespace-nowrap">
                        {article.category}
                      </div>
                    </Badge>
                    <h4 className="max-w-[566px] [font-family:'Inter',Helvetica] font-semibold text-[#1a202c] text-[26px] tracking-[0] leading-[35px] mb-[76px]">
                      {article.title}
                    </h4>
                    <p className="font-normal text-[#1a202c] text-lg leading-5 whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0] mb-[29px]">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#000000bf] text-base tracking-[0] leading-[18.2px]">
                          By{" "}
                        </span>
                        <span className="font-bold text-[#87127c]">
                          {article.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-[18px] h-[18px]" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#000000bf] text-sm tracking-[0] leading-[16.0px]">
                          {article.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <UsersIcon className="w-[18px] h-[18px]" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#000000bf] text-sm tracking-[0] leading-[16.0px]">
                          {article.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="flex gap-[82px] items-center mb-[116px] w-[536px] h-[357px] bg-[url('/vector.svg')] bg-cover bg-center bg-no-repeat relative">
          <div className="flex flex-col">
            <div className="[font-family:'Inter',Helvetica] font-medium text-[#393939] text-xl tracking-[0] leading-[22.8px] whitespace-nowrap mb-[66px]">
              Get Our Weekly
            </div>
            <div className="max-w-[664px] [font-family:'Inter',Helvetica] font-semibold text-[#87127c] text-[70px] tracking-[0] leading-[35px] mb-[24px]">
              Newsletter
            </div>
            <div className="w-[81px] h-[5px] bg-black mb-[24px]" />
            <div className="max-w-[761px] h-[93px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-xl tracking-[-0.20px] leading-[normal] mb-[128px]">
              Receive weekly articles rooted in faith, relationships, and
              soulful living, carefully curated to guide you towards building
              meaningful connections, living with purpose, and finding love that
              aligns with your values.
            </div>
            <div className="w-[552px] h-14 flex relative">
              <Input
                className="w-[539px] h-14 bg-[#ffffff] rounded-[50px] border-[0.5px] border-solid border-[#b6b6b6] pl-[25px]"
                placeholder="Email Address"
              />
              <Button className="absolute right-0 top-0 w-[146px] h-14 bg-[#87127c] rounded-[50px] shadow-[0px_1px_12px_transparent] h-auto">
                <div className="w-[104px] h-[33px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-[#ffffff] text-[15px] text-center tracking-[1.50px] leading-[normal]">
                  SUBSCRIBE
                </div>
              </Button>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <div className="w-full max-w-[1340px] h-[524px] bg-[#ffffff] rounded-[20px] overflow-hidden border border-solid border-[#dbdbdb] relative mx-auto mb-[116px]">
          {/* Background decorative elements */}
          <div className="absolute top-[55px] right-[-144px] w-[485px] h-[497px] rounded-[242.5px/248.5px] blur-[50px] [background:conic-gradient(from_180deg_at_50%_50%,rgba(185,218,251,0.2)_0%,rgba(152,149,238,0.2)_0%,rgba(197,84,146,0.2)_0%,rgba(236,172,173,0.2)_27%)] opacity-70" />
          <div className="absolute top-[-25px] left-[-115px] w-[485px] h-[497px] rounded-[242.5px/248.5px] blur-[50px] [background:conic-gradient(from_180deg_at_50%_50%,rgba(185,218,251,0.2)_0%,rgba(152,149,238,0.2)_0%,rgba(197,84,146,0.2)_0%,rgba(236,172,173,0.2)_27%)] opacity-70" />

          {/* Decorative circles */}
          <div className="absolute top-[137px] left-[-328px] w-[719px] h-[719px]">
            <div className="absolute top-[118px] left-[calc(50.00%_-_222px)] w-[380px] h-[547px] rounded-[190px/273.5px] border border-solid border-[#87127c] -rotate-45" />
            <div className="absolute top-[86px] left-[calc(50.00%_-_190px)] w-[380px] h-[547px] rounded-[190px/273.5px] border border-solid border-[#87127c] -rotate-45" />
            <div className="absolute top-[54px] left-[calc(50.00%_-_158px)] w-[380px] h-[547px] rounded-[190px/273.5px] border border-solid border-[#87127c] -rotate-45" />
          </div>

          <div className="absolute top-[-403px] right-[50px] w-[959px] h-[819px]">
            <div className="absolute top-[107px] left-[calc(50.00%_-_278px)] w-[471px] h-[678px] rounded-[235.55px/339.07px] border border-solid border-[#87127c] rotate-[-40.52deg]" />
            <div className="absolute top-[71px] left-[calc(50.00%_-_236px)] w-[471px] h-[678px] rounded-[235.55px/339.07px] border border-solid border-[#87127c] rotate-[-40.52deg]" />
            <div className="absolute top-[34px] left-[calc(50.00%_-_193px)] w-[471px] h-[678px] rounded-[235.55px/339.07px] border border-solid border-[#87127c] rotate-[-40.52deg]" />
          </div>

          <div className="absolute top-[116px] right-[265px] w-[307px] h-[223px] rotate-[39.87deg]">
            <div className="absolute top-[75px] left-[calc(50.00%_-_153px)] w-[281px] h-[148px] bg-[#ffc3f9] rounded-[140.33px/74.04px] blur-[51.58px]" />
            <div className="absolute top-0 left-[calc(50.00%_-_121px)] w-[275px] h-[148px] bg-[#ffd1fa] rounded-[137.43px/74.04px] blur-[51.58px]" />
          </div>

          <img
            className="absolute w-[28.58%] h-[150.76%] top-[14.69%] right-[11.64%]"
            alt="Rectangle"
            src="/rectangle.png"
          />

          <div className="absolute top-[149px] left-[77px] max-w-[653px]">
            <div className="flex flex-col items-start gap-3">
              <div className="h-12 [font-family:'Roboto',Helvetica] font-extrabold text-[#87127c] text-[45px] tracking-[0] leading-[48px] whitespace-nowrap">
                Find Your Perfect Match Today!
              </div>
              <div className="h-[105px] max-w-[653px] [font-family:'Roboto',Helvetica] font-normal text-[#050505] text-[22px] tracking-[0] leading-[35px]">
                Start Your Journey To Meaningful Connections In Just A Few Taps.
                <br />
                download The App And Join A Growing Community Of Like-minded
                Individuals.
              </div>
            </div>
          </div>

          <div className="absolute top-[350px] left-[89px] w-[426px] h-[62px] flex gap-[32.8px]">
            <img
              className="w-[195.3px] h-[61.61px]"
              alt="Toppng"
              src="/toppng-2.png"
            />
            <img
              className="mt-[1.3px] w-[197.93px] h-[58.98px]"
              alt="Pngitem"
              src="/pngitem-1144050-3.png"
            />
          </div>
        </div>
      </div>

      {/* Footer gradient */}
    </div>
  );
};
