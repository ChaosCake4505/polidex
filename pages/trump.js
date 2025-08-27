// pages/trump.js
import React, { useMemo, useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

const PREDICTION_COLORS = [
  { color: "#6495ed", label: "Trump Approval Rating" }, // Blue
  { color: "#E30022", label: "Trump Approval Rating" }, // Red
  { color: "#A259D9", label: "Trump Approval Rating" }, // Purple
];

/**
 * Raw polling block pasted from the user (approval/disapproval by field dates).
 * We'll parse this into {date, approve, disapprove, pollster, sample, pop}.
 */
const RAW_POLLS = `Rasmussen Reports
8/10 - 8/14	1500 LV	49	49
Tie
Morning Consult
8/8 - 8/10	2200 RV	45	51
Spread
-6
Quantus Insights
8/11 - 8/13	1000 RV	47	51
Spread
-4
Pew Research
8/4 - 8/10	3554 A	38	60
Spread
-22
Economist/YouGov
8/9 - 8/11	1474 RV	44	53
Spread
-9
RMG Research*
8/6 - 8/14	3000 RV	48	50
Spread
-2
Economist/YouGov
8/1 - 8/4	1528 RV	43	55
Spread
-12
Morning Consult
8/1 - 8/3	2201 RV	45	52
Spread
-7
CNBC
7/29 - 8/3	1000 A	46	51
Spread
-5
RMG Research*
7/30 - 8/7	3000 RV	50	49
Spread
+1
IBD/TIPP
7/30 - 8/1	1362 RV	45	46
Spread
-1
Economist/YouGov
7/25 - 7/28	1610 RV	44	53
Spread
-9
Reuters/Ipsos
7/25 - 7/27	1023 A	40	56
Spread
-16
RMG Research*
7/23 - 7/31	3000 RV	50	48
Spread
+2
Morning Consult
7/25 - 7/27	2203 RV	47	50
Spread
-3
Yahoo News
7/24 - 7/28	1168 RV	44	54
Spread
-10
Trafalgar/InsiderAdvantage
7/22 - 7/23	1200 LV	50	48
Spread
+2
Quantus Insights
7/21 - 7/23	1123 RV	47	50
Spread
-3
Emerson
7/21 - 7/22	1400 RV	46	47
Spread
-1
Daily Mail
7/21 - 7/22	1007 RV	49	51
Spread
-2
Economist/YouGov
7/18 - 7/21	1551 RV	43	56
Spread
-13
FOX News
7/18 - 7/21	1000 RV	46	54
Spread
-8
RMG Research*
7/16 - 7/24	3000 RV	50	48
Spread
+2
Rasmussen Reports
7/16 - 7/22	1500 LV	50	49
Spread
+1
Morning Consult
7/18 - 7/20	2202 RV	45	52
Spread
-7
Wall Street Journal
7/16 - 7/20	1500 RV	46	52
Spread
-6
CBS News
7/16 - 7/18	2343 A	42	58
Spread
-16
Reuters/Ipsos
7/15 - 7/16	1027 A	41	54
Spread
-13
Quantus Insights
7/14 - 7/16	1000 RV	48	50
Spread
-2
Atlas Intel
7/13 - 7/18	1935 A	44	55
Spread
-11
Gallup
7/7 - 7/21	1002 A	37	58
Spread
-21
Big Data Poll
7/12 - 7/14	3022 RV	48	49
Spread
-1
Marquette
7/7 - 7/16	1005 A	45	55
Spread
-10
Economist/YouGov
7/11 - 7/14	1506 RV	43	54
Spread
-11
RMG Research*
7/9 - 7/16	3000 RV	52	48
Spread
+4
Morning Consult
7/11 - 7/13	2201 RV	47	50
Spread
-3
Quinnipiac
7/10 - 7/14	1290 RV	40	54
Spread
-14
CNN
7/10 - 7/13	RV	44	56
Spread
-12
Daily Mail
7/9 - 7/10	1013 RV	48	52
Spread
-4
Harvard-Harris
7/6 - 7/8	2044 RV	47	49
Spread
-2
Economist/YouGov
7/4 - 7/7	1389 RV	43	54
Spread
-11
Morning Consult
7/3 - 7/6	2203 RV	45	52
Spread
-7
Rasmussen Reports
7/2 - 7/8	1500 LV	49	49
Tie
Rasmussen Reports
7/9 - 7/15	1500 LV	48	50
Spread
-2
RMG Research*
6/30 - 7/10	3000 RV	50	47
Spread
+3
Quantus Insights
6/30 - 7/2	1000 RV	47	49
Spread
-2
Economist/YouGov
6/27 - 6/30	1491 RV	45	53
Spread
-8
Yahoo News
6/26 - 6/30	1074 RV	45	54
Spread
-9
Morning Consult
6/27 - 6/29	2202 RV	47	50
Spread
-3
Rasmussen Reports
6/24 - 6/30	1500 LV	51	47
Spread
+4
I&I/TIPP
6/25 - 6/27	1421 A	44	45
Spread
-1
Emerson
6/24 - 6/25	1000 RV	45	46
Spread
-1
NPR/PBS/Marist
6/23 - 6/25	1206 RV	44	53
Spread
-9
Quantus Insights
6/23 - 6/25	1000 RV	47	50
Spread
-3
Quinnipiac
6/22 - 6/24	979 RV	41	54
Spread
-13
RMG Research*
6/18 - 6/26	3000 RV	51	47
Spread
+4
Reuters/Ipsos
6/21 - 6/23	1139 A	41	57
Spread
-16
Economist/YouGov
6/20 - 6/23	1455 RV	43	54
Spread
-11
Morning Consult
6/20 - 6/22	2205 RV	45	53
Spread
-8
Rasmussen Reports
6/17 - 6/23	1500 LV	52	47
Spread
+5
Trafalgar Group
6/18 - 6/20	1085 LV	54	45
Spread
+9
FOX News
6/13 - 6/16	1003 RV	46	54
Spread
-8
InsiderAdvantage
6/15 - 6/16	1000 LV	54	44
Spread
+10
RMG Research*
6/11 - 6/19	3000 RV	53	46
Spread
+7
Economist/YouGov
6/13 - 6/16	1351 RV	44	53
Spread
-9
Morning Consult
6/13 - 6/15	2207 RV	46	52
Spread
-6
Reuters/Ipsos
6/11 - 6/16	4258 A	42	54
Spread
-12
Rasmussen Reports
6/10 - 6/16	1500 LV	52	47
Spread
+5
Harvard-Harris
6/11 - 6/12	2097 RV	46	50
Spread
-4
Daily Mail
6/10 - 6/11	1807 RV	48	52
Spread
-4
Gallup
6/2 - 6/19	1000 A	40	57
Spread
-17
Quantus Insights
6/9 - 6/11	1000 RV	48	49
Spread
-1
Economist/YouGov
6/6 - 6/9	1397 RV	45	53
Spread
-8
Quinnipiac
6/5 - 6/9	1265 RV	38	54
Spread
-16
Morning Consult
6/6 - 6/8	1867 RV	47	51
Spread
-4
Rasmussen Reports
6/3 - 6/9	1500 LV	51	48
Spread
+3
RMG Research*
6/2 - 6/12	3000 RV	52	46
Spread
+6
Pew Research
6/2 - 6/8	5044 A	41	58
Spread
-17
CBS News
6/4 - 6/6	2428 A	45	55
Spread
-10
NBC News Decision Desk
5/30 - 6/10	19410 A	45	55
Spread
-10
Daily Mail
6/6 - 6/6	1006 RV	47	53
Spread
-6
Quantus Insights
6/1 - 6/4	1000 RV	49	48
Spread
+1
Economist/YouGov
5/30 - 6/2	1436 RV	46	51
Spread
-5
Trafalgar Group
5/30 - 6/1	1098 LV	54	46
Spread
+8
Morning Consult
5/30 - 6/1	2205 RV	46	51
Spread
-5
RMG Research*
5/27 - 6/3	3000 RV	51	46
Spread
+5
I&I/TIPP
5/28 - 5/30	1395 A	43	45
Spread
-2
Rasmussen Reports
5/25 - 5/29	1500 LV	53	46
Spread
+7
Economist/YouGov
5/23 - 5/26	1486 RV	46	52
Spread
-6
Yahoo News
5/22 - 5/27	1560 A	41	54
Spread
-13
RMG Research*
5/20 - 5/29	3000 RV	49	50
Spread
-1
Morning Consult
5/23 - 5/25	2208 RV	48	51
Spread
-3
Atlas Intel
5/20 - 5/27	3469 A	45	54
Spread
-9
Rasmussen Reports
5/18 - 5/22	1500 LV	50	49
Spread
+1
Quantus Insights
5/18 - 5/20	1000 RV	48	48
Tie
Daily Kos/Civiqs
5/17 - 5/20	1018 RV	47	52
Spread
-5
InsiderAdvantage
5/17 - 5/19	1000 LV	55	44
Spread
+11
Economist/YouGov
5/16 - 5/19	1558 RV	45	52
Spread
-7
Morning Consult
5/16 - 5/18	2200 RV	48	50
Spread
-2
Reuters/Ipsos
5/16 - 5/18	1024 A	42	52
Spread
-10
RMG Research*
5/14 - 5/21	3000 RV	48	50
Spread
-2
Harvard-Harris
5/14 - 5/15	1903 RV	47	48
Spread
-1
Daily Mail
5/13 - 5/14	1003 RV	50	50
Tie
Marquette
5/5 - 5/15	1004 A	46	54
Spread
-8
Reuters/Ipsos
5/12 - 5/13	1163 A	44	52
Spread
-8
Rasmussen Reports
5/11 - 5/15	1500 LV	51	48
Spread
+3
RMG Research*
5/7 - 5/15	3000 RV	52	48
Spread
+4
Economist/YouGov
5/9 - 5/12	1610 RV	45	52
Spread
-7
Morning Consult
5/9 - 5/11	2221 RV	46	52
Spread
-6
Gallup
5/1 - 5/18	1003 A	43	53
Spread
-10
Quantus Insights
5/5 - 5/7	1000 RV	48	48
Tie
Rasmussen Reports
5/4 - 5/8	1500 LV	51	48
Spread
+3
Big Data Poll
5/3 - 5/5	3128 RV	48	47
Spread
+1
Economist/YouGov
5/2 - 5/5	1693 RV	44	52
Spread
-8
Morning Consult
5/2 - 5/4	2263 RV	46	52
Spread
-6
RMG Research*
4/30 - 5/8	3000 RV	49	49
Tie
I&I/TIPP
4/30 - 5/2	1400 A	42	47
Spread
-5
Trafalgar/InsiderAdvantage
4/30 - 5/1	1200 LV	46	44
Spread
+2
Rasmussen Reports
4/27 - 5/1	1500 LV	50	49
Spread
+1
Emerson
4/25 - 4/28	1000 RV	45	45
Tie
Economist/YouGov
4/25 - 4/28	1626 RV	43	54
Spread
-11
Yahoo News
4/25 - 4/28	1071 RV	45	53
Spread
-8
Reuters/Ipsos
4/25 - 4/27	1029 A	42	53
Spread
-11
RMG Research*
4/23 - 5/1	3000 RV	49	48
Spread
+1
Daily Mail
4/23 - 4/28	1006 RV	45	55
Spread
-10
Newsnation
4/23 - 4/27	1448 RV	44	56
Spread
-12
CBS News
4/23 - 4/25	2365 A	45	55
Spread
-10
NY Times/Siena
4/21 - 4/24	913 RV	42	54
Spread
-12
Quantus Insights
4/21 - 4/23	1000 RV	48	50
Spread
-2
NPR/PBS/Marist
4/21 - 4/23	1324 RV	43	53
Spread
-10
Rasmussen Reports
4/20 - 4/24	1500 LV	47	51
Spread
-4
CNN
4/17 - 4/24	RV	43	57
Spread
-14
RMG Research*
4/16 - 4/24	3000 RV	49	48
Spread
+1
Economist/YouGov
4/19 - 4/22	1446 RV	44	53
Spread
-9
ABC/Wash Post/Ipsos
4/18 - 4/22	1992 RV	42	55
Spread
-13
FOX News
4/18 - 4/21	1104 RV	44	55
Spread
-11
Morning Consult
4/18 - 4/20	2207 RV	46	52
Spread
-6
Reuters/Ipsos
4/16 - 4/21	4306 A	42	53
Spread
-11
Rasmussen Reports
4/13 - 4/17	1500 LV	51	47
Spread
+4
Economist/YouGov
4/13 - 4/15	1329 RV	45	53
Spread
-8
Daily Kos/Civiqs
4/12 - 4/15	1124 RV	46	53
Spread
-7
Daily Mail
4/10 - 4/14	1002 RV	54	46
Spread
+8
Atlas Intel
4/10 - 4/14	2347 A	46	52
Spread
-6
Morning Consult
4/11 - 4/13	2203 RV	45	52
Spread
-7
RMG Research*
4/9 - 4/16	3000 RV	48	51
Spread
-3
CNBC
4/9 - 4/13	1000 A	44	51
Spread
-7
Harvard-Harris
4/9 - 4/10	2286 RV	48	46
Spread
+2
CBS News
4/8 - 4/11	2410 A	47	53
Spread
-6
Pew Research
4/7 - 4/13	3589 A	40	59
Spread
-19
Quantus Insights
4/7 - 4/9	1000 RV	47	50
Spread
-3
Gallup
4/1 - 4/14	1006 A	44	53
Spread
-9
Rasmussen Reports
4/6 - 4/10	1500 LV	48	50
Spread
-2
Economist/YouGov
4/5 - 4/8	1563 RV	45	52
Spread
-7
HarrisX
4/4 - 4/7	1883 RV	47	49
Spread
-2
Quinnipiac
4/3 - 4/7	1407 RV	41	53
Spread
-12
Morning Consult
4/4 - 4/6	2207 RV	46	52
Spread
-6
RMG Research*
4/2 - 4/10	3000 RV	49	48
Spread
+1
Cygnal
4/1 - 4/3	1500 LV	47	51
Spread
-4
Daily Mail
3/31 - 4/3	1000 RV	53	47
Spread
+6
Rasmussen Reports
3/30 - 4/3	1500 LV	49	50
Spread
-1
Reuters/Ipsos
3/31 - 4/2	1486 A	43	53
Spread
-10
Economist/YouGov
3/30 - 4/1	1465 RV	46	51
Spread
-5
RMG Research*
3/26 - 4/3	3000 RV	51	47
Spread
+4
Wall Street Journal
3/27 - 4/1	1500 RV	46	51
Spread
-5
Harvard-Harris
3/26 - 3/27	2746 RV	49	46
Spread
+3
CBS News
3/27 - 3/28	2609 A	50	50
Tie
TIPP
3/26 - 3/28	1452 A	44	45
Spread
-1
Daily Mail
3/25 - 3/27	1001 RV	49	51
Spread
-2
Quantus Insights
3/25 - 3/27	1000 RV	49	46
Spread
+3
Rasmussen Reports
3/23 - 3/27	1500 LV	50	49
Spread
+1
Economist/YouGov
3/22 - 3/25	1440 RV	48	50
Spread
-2
RMG Research*
3/18 - 3/27	3000 RV	52	45
Spread
+7
Marquette
3/17 - 3/27	1021 A	46	54
Spread
-8
Reuters/Ipsos
3/21 - 3/23	1030 A	45	51
Spread
-6
Rasmussen Reports
3/16 - 3/20	1500 LV	51	47
Spread
+4
Economist/YouGov
3/16 - 3/18	1458 RV	47	50
Spread
-3
FOX News
3/14 - 3/17	994 RV	49	51
Spread
-2
RMG Research*
3/12 - 3/19	3000 RV	53	45
Spread
+8
Reuters/Ipsos
3/11 - 3/12	1422 A	44	52
Spread
-8
Rasmussen Reports
3/9 - 3/13	1500 LV	52	47
Spread
+5
Quantus Insights
3/10 - 3/12	1000 RV	50	47
Spread
+3
Economist/YouGov
3/9 - 3/11	1532 RV	48	49
Spread
-1
Atlas Intel
3/7 - 3/12	2550 A	47	52
Spread
-5
NBC News
3/7 - 3/11	1000 RV	47	51
Spread
-4
Emerson
3/8 - 3/10	1000 RV	47	45
Spread
+2
Gallup
3/3 - 3/16	1002 A	43	53
Spread
-10
RMG Research*
3/6 - 3/13	3000 RV	54	44
Spread
+10
Quinnipiac
3/6 - 3/10	1198 RV	42	53
Spread
-11
CNN
3/6 - 3/9	RV	46	53
Spread
-7
Daily Mail
3/5 - 3/7	1019 RV	49	51
Spread
-2
Trafalgar/InsiderAdvantage
3/5 - 3/5	800 RV	50	45
Spread
+5
Rasmussen Reports
3/2 - 3/6	1500 LV	50	48
Spread
+2
Reuters/Ipsos
3/3 - 3/4	1174 A	44	51
Spread
-7
Economist/YouGov
3/1 - 3/4	1491 RV	49	49
Tie
Emerson
3/2 - 3/3	1000 RV	48	43
Spread
+5
Daily Kos/Civiqs
2/28 - 3/3	1031 RV	48	52
Spread
-4
CBS News
2/26 - 2/28	2311 A	51	49
Spread
+2
I&I/TIPP
2/26 - 2/28	1434 A	46	43
Spread
+3
RMG Research*
2/24 - 2/28	3000 RV	53	45
Spread
+8
CNN
2/24 - 2/28	RV	48	52
Spread
-4
Atlas Intel
2/24 - 2/27	2849 A	50	50
Tie
Rasmussen Reports
2/23 - 2/27	1500 LV	50	48
Spread
+2
Quantus Insights
2/24 - 2/26	1000 RV	51	45
Spread
+6
NPR/PBS/Marist
2/24 - 2/26	1533 RV	45	51
Spread
-6
Daily Mail
2/24 - 2/25	1001 RV	54	46
Spread
+8
Economist/YouGov
2/23 - 2/25	1444 RV	48	47
Spread
+1
Morning Consult
2/21 - 2/24	2225 RV	50	47
Spread
+3
Reuters/Ipsos
2/21 - 2/23	1029 A	44	50
Spread
-6
RMG Research*
2/18 - 2/21	3000 RV	53	44
Spread
+9
Harvard-Harris
2/19 - 2/20	2443 RV	52	43
Spread
+9
Rasmussen Reports
2/16 - 2/20	1500 LV	51	47
Spread
+4
Economist/YouGov
2/16 - 2/18	1451 RV	50	47
Spread
+3
Emerson
2/15 - 2/17	1000 RV	48	42
Spread
+6
Wash Post/Ipsos
2/13 - 2/18	2177 RV	48	51
Spread
-3
Reuters/Ipsos
2/13 - 2/18	4145 A	44	51
Spread
-7
Quinnipiac
2/13 - 2/17	1039 RV	45	49
Spread
-4
CNN
2/13 - 2/17	RV	46	54
Spread
-8
SurveyUSA
2/13 - 2/16	2000 A	51	45
Spread
+6
RMG Research*
2/10 - 2/14	3000 RV	55	43
Spread
+12
Quantus Insights
2/10 - 2/12	1000 RV	53	44
Spread
+9
Economist/YouGov
2/9 - 2/11	1430 RV	47	49
Spread
-2
Rasmussen Reports
2/9 - 2/13	1500 LV	54	44
Spread
+10
Gallup
2/3 - 2/16	1004 A	45	51
Spread
-6
Trafalgar/InsiderAdvantage
2/7 - 2/9	1321 RV	54	45
Spread
+9
CBS News
2/5 - 2/7	2175 A	53	47
Spread
+6
RMG Research*
2/3 - 2/6	3000 RV	51	45
Spread
+6
Cygnal
2/4 - 2/5	1500 LV	50	48
Spread
+2
Economist/YouGov
2/2 - 2/4	1423 RV	48	47
Spread
+1
Quantus Insights
2/1 - 2/3	1000 RV	52	45
Spread
+7
Morning Consult
1/31 - 2/3	2303 RV	49	47
Spread
+2
Rasmussen Reports
2/2 - 2/6	1500 LV	51	45
Spread
+6
Marquette
1/27 - 2/5	1063 A	48	52
Spread
-4
Pew Research
1/27 - 2/5	5086 A	47	51
Spread
-4
TIPP
1/29 - 1/31	1478 A	46	41
Spread
+5
Fabrizio/Anzalone
1/27 - 2/1	3000 RV	48	47
Spread
+1
RMG Research*
1/27 - 1/31	4000 RV	53	43
Spread
+10
Rasmussen Reports
1/26 - 1/30	1500 LV	52	45
Spread
+7
Emerson
1/27 - 1/28	1000 RV	49	41
Spread
+8
Economist/YouGov
1/26 - 1/28	1376 RV	50	46
Spread
+4
Quinnipiac
1/23 - 1/27	1019 RV	46	43
Spread
+3
Morning Consult
1/24 - 1/26	2302 RV	52	44
Spread
+8
Reuters/Ipsos
1/24 - 1/26	1034 A	45	46
Spread
-1
Gallup
1/21 - 1/27	1001 A	47	48
Spread
-1
Quantus Insights
1/22 - 1/23	1000 RV	54	40
Spread
+14
RMG Research*
1/22 - 1/23	3000 RV	57	39
Spread
+18
Atlas Intel
1/21 - 1/23	1882 A	50	50
Tie
Rasmussen Reports
1/20 - 1/23	1667 LV	53	42
Spread
+11
Reuters/Ipsos
1/20 - 1/21	1077 A	47	41
Spread
+6
Big Data Poll
1/19 - 1/22	2979 RV	56	37
Spread
+19
InsiderAdvantage
1/20 - 1/20	800 RV	56	39
Spread
+17`;

// ---- Helpers -------------------------------------------------------------

const YEAR = 2025;

/** Parse the RAW_POLLS text into rows with a mid-date and approval/disapproval */
function parsePolls(raw) {
  const lines = raw.split(/\r?\n/).map((s) => s.trim()).filter((s) => s.length > 0);
  const skip = new Set(["Spread", "Tie", "+1","+2","+3","+4","+5","+6","+7","+8","+9","+10","+11","+12",
    "-1","-2","-3","-4","-5","-6","-7","-8","-9","-10","-11","-12","-13","-14","-15","-16","-17","-18","-19","-21","-22"]);
  const out = [];

  for (let i = 0; i < lines.length; i++) {
    const pollster = lines[i];
    if (skip.has(pollster)) continue;
    const next = lines[i + 1];
    if (!next) continue;

    // Pattern: M/D - M/D  [sample]? [pop]?  approve disapprove
    const m = next.match(
      /(\d{1,2})\/(\d{1,2})\s*-\s*(\d{1,2})\/(\d{1,2})\s+([\d,]+)?\s*(LV|RV|A)?\s+(\d{1,2})\s+(\d{1,2})/
    );
    if (!m) continue;

    const sm = parseInt(m[1], 10);
    const sd = parseInt(m[2], 10);
    const em = parseInt(m[3], 10);
    const ed = parseInt(m[4], 10);
    const sample = m[5] ? parseInt(m[5].replace(/,/g, ""), 10) : null;
    const pop = m[6] || null;
    const approve = parseInt(m[7], 10);
    const disapprove = parseInt(m[8], 10);

    const start = new Date(YEAR, sm - 1, sd);
    const endYear = em < sm ? YEAR + 1 : YEAR;
    const end = new Date(endYear, em - 1, ed);
    const mid = new Date((start.getTime() + end.getTime()) / 2);

    out.push({
      pollster,
      start,
      end,
      date: mid,
      t: mid.getTime(),
      approve,
      disapprove,
      sample,
      pop,
    });

    i += 1;
  }

  out.sort((a, b) => a.t - b.t);
  return out;
}

/**
 * Simple LOWESS/LOESS smoother (locally weighted linear regression with tricube kernel).
 * bandwidth is fraction of data to use in each local regression window (0..1).
 */
function loess(xs, ys, bandwidth = 0.25) {
  const n = xs.length;
  if (n === 0) return [];
  const r = new Array(n).fill(0);
  const k = Math.max(2, Math.floor(bandwidth * n));

  for (let i = 0; i < n; i++) {
    const xi = xs[i];
    const distances = xs.map((x, idx) => ({ idx, d: Math.abs(x - xi) })).sort((a, b) => a.d - b.d);
    const window = distances.slice(0, k);
    const maxd = window[window.length - 1].d || 1;

    let sumW = 0, sumWX = 0, sumWY = 0, sumWXX = 0, sumWXY = 0;
    for (const { idx, d } of window) {
      const u = Math.max(0, 1 - Math.pow(d / maxd, 3));
      const w = Math.pow(u, 3);
      const x = xs[idx], y = ys[idx];
      sumW += w; sumWX += w * x; sumWY += w * y; sumWXX += w * x * x; sumWXY += w * x * y;
    }

    const denom = sumW * sumWXX - sumWX * sumWX;
    let yhat;
    if (Math.abs(denom) < 1e-12) {
      yhat = sumWY / sumW;
    } else {
      const a = (sumWXX * sumWY - sumWX * sumWXY) / denom;
      const b = (sumW * sumWXY - sumWX * sumWY) / denom;
      yhat = a + b * xi;
    }
    r[i] = yhat;
  }
  return r;
}

// ---- Page ---------------------------------------------------------------

export default function TrumpApprovalPage() {
  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setColorIdx((p) => (p + 1) % PREDICTION_COLORS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const polls = useMemo(() => parsePolls(RAW_POLLS), []);
  const chartData = useMemo(() => {
    const xs = polls.map((p) => p.t);
    const ys = polls.map((p) => p.approve);
    const smoothed = loess(xs, ys, 0.25);

    return polls.map((p, i) => ({
      t: p.t,
      dateLabel: p.date,
      Approve: p.approve,
      Loess: smoothed[i],
      pollster: p.pollster,
      Disapprove: p.disapprove,
      sample: p.sample,
      pop: p.pop,
    }));
  }, [polls]);

  const latest = chartData.length ? chartData[chartData.length - 1] : null;

  const fmtDate = (d) =>
    d ? d.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Edge-to-edge dark header bar (matches other pages) */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Polidex {YEAR}{" "}
          <span
            style={{
              color: PREDICTION_COLORS[colorIdx].color,
              transition: "color 0.8s cubic-bezier(.4,0,.2,1)",
            }}
          >
            {PREDICTION_COLORS[colorIdx].label}
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Explore national job approval polling and our LOESS-smoothed trend line.
        </p>
        <p className="mt-2 italic text-sm text-gray-400">
          * Midpoints of field dates; tricube kernel, 25% bandwidth. RV=Registered Voters, LV=Likely Voters, A=Adults.
        </p>
      </div>

      <div className="px-4 py-10 max-w-7xl mx-auto">
        {/* Stats strip */}
        {latest && (
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-800/80 rounded-xl p-4 shadow">
              <div className="text-sm opacity-70">Latest Raw Approval</div>
              <div className="text-3xl font-semibold text-[#6495ed]">
                {latest.Approve}%
              </div>
              <div className="text-xs opacity-70">
                {fmtDate(latest.dateLabel)} • {latest.pollster}
                {latest.sample ? ` • n=${latest.sample}` : ""} {latest.pop ? `• ${latest.pop}` : ""}
              </div>
            </div>
            <div className="bg-gray-800/80 rounded-xl p-4 shadow">
              <div className="text-sm opacity-70">Latest Smoothed Approval (LOESS)</div>
              <div className="text-3xl font-semibold text-[#A259D9]">
                {latest.Loess ? latest.Loess.toFixed(1) : "—"}%
              </div>
              <div className="text-xs opacity-70">Bandwidth 0.25</div>
            </div>
            <div className="bg-gray-800/80 rounded-xl p-4 shadow">
              <div className="text-sm opacity-70">Coverage</div>
              <div className="text-3xl font-semibold">
                {fmtDate(chartData[0]?.dateLabel)} – {fmtDate(latest.dateLabel)}
              </div>
              <div className="text-xs opacity-70">{chartData.length} polls</div>
            </div>
          </div>
        )}

        {/* Chart card */}
        <div className="bg-gray-800/80 rounded-2xl p-5 shadow-lg">
          <div className="mb-3 text-lg font-semibold">Approval Trend (LOESS)</div>
          <div className="h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
              >
                <CartesianGrid stroke="#2d2d2d" strokeDasharray="3 3" />
                <XAxis
                  dataKey="t"
                  type="number"
                  domain={["dataMin", "dataMax"]}
                  tickFormatter={(t) =>
                    new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                  }
                  tick={{ fill: "#cbd5e1", fontSize: 12 }}
                />
                <YAxis
                  domain={[30, 60]}
                  tick={{ fill: "#cbd5e1", fontSize: 12 }}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border: "1px solid #374151",
                    borderRadius: 12,
                    color: "#fff",
                  }}
                  labelFormatter={(t) =>
                    new Date(t).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }
                  formatter={(value, name) => {
                    if (name === "Loess") return [`${Number(value).toFixed(1)}%`, "LOESS"];
                    if (name === "Approve") return [`${value}%`, "Approval"];
                    return [value, name];
                  }}
                />
                <Legend />
                {/* Raw approval (faint) */}
                <Line
                  type="monotone"
                  dataKey="Approve"
                  name="Approval"
                  stroke="#6495ed"
                  strokeOpacity={0.35}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 3 }}
                />
                {/* LOESS-smoothed approval (bold) */}
                <Line
                  type="monotone"
                  dataKey="Loess"
                  name="Loess"
                  stroke="#A259D9"
                  strokeWidth={3}
                  dot={false}
                />
                {/* 50% reference */}
                <ReferenceLine y={50} stroke="#6b7280" strokeDasharray="4 4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 text-xs opacity-70">
            Note: LOESS smoothing is a nonparametric local regression; it reduces noise while preserving broad trends. Raw points are the thin blue line; the smoothed estimate is the purple line.
          </div>
        </div>

        {/* Recent polls table */}
        <div className="mt-8 bg-gray-800/60 rounded-2xl overflow-hidden">
          <div className="px-5 py-3 text-sm font-semibold bg-gray-800/80">Recent Polls</div>
          <div className="max-h-[300px] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-800/40 sticky top-0">
                <tr>
                  <th className="text-left p-3">Date</th>
                  <th className="text-left p-3">Pollster</th>
                  <th className="text-right p-3">Approve</th>
                  <th className="text-right p-3">Disapprove</th>
                  <th className="text-right p-3">Sample</th>
                  <th className="text-right p-3">Pop</th>
                </tr>
              </thead>
              <tbody>
                {[...polls].reverse().slice(0, 20).map((p, idx) => (
                  <tr key={idx} className={idx % 2 ? "bg-gray-900/20" : ""}>
                    <td className="p-3">
                      {p.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </td>
                    <td className="p-3">{p.pollster}</td>
                    <td className="p-3 text-right">{p.approve}%</td>
                    <td className="p-3 text-right">{p.disapprove}%</td>
                    <td className="p-3 text-right">{p.sample ?? "—"}</td>
                    <td className="p-3 text-right">{p.pop ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 text-xs opacity-70">Showing the 20 most recent entries.</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
