import React from 'react'
import Head from 'next/head'
import styles from '@/pages/channels/Channels.module.css'

function Channels() {
    const useGenaral = [
        'US006:AMC-HD',
        'US001:A&E-HD',
        'US007:ANIMAL-PLANET',
        'US008:BBC-America',
        'US010:BET-HD',
        'US011:BRAVO-HD',
        'US015:Viceland',
        'US016:CARTOON-NETWORK',
        'US018:CBSN-HD',
        'US020:CNBC',
        'US021:CNN-HD',
        'US022:COMEDY-CENTRAL',
        'US023:CW-HD',
        'US024:DESTINATION-AMERICA',
        'US025:Discovery-HD',
        'US026:Disney-Channel',
        'US027:Disney-JR',
        'US028:Disney-XD',
        'US029:DIY Network',
        'US030:E!',
        'US033:ESPN-News',
        'US035:Food-Network',
        'US040:Freeform',
        'US041:FX-HD',
        'US042:FXX',
        'US043:HALLMARK',
        'US049:HGTV-HD',
        'US050:HISTORY-HD',
        'US051:ID-HD',
        'US052:TV Land',
        'US053:Lifetime US',
        'US057:MSNBC-HD',
        'US058:MTV',
        'US059:NAT-GEO',
        'US063:NBCSN-HD',
        'US065:Nicktoons',
        'US066:INSP',
        'US067:OWN',
        'US068:Science',
        'US069:SHOWTIME',
        'US070:SHOWTIME2',
        'US071:SPIKE-HD',
        'US072:SYFY',
        'US073:TBS-HD',
        'US075:TLC-HD',
        'US076:TNT-HD',
        'US077:Travel-channel',
        'US078:TRU-TV',
        'US079:USA-Network',
        'US080:Velocity-HD',
        'US081:VH1',
        'US082:WE-TV',
        'US096:CBN',
        'US097:GOD TV',
        'US098:Peace TV',
        'US130:NAT GEO WILD',
        'US333:PBS_Kids',
        'US613:CW_WPSG',
        'US614:CW_WKBD',
        'US615:CW_KSTW',
        'US616:CW_WTOG',
        'US617:News4 (WRC-TV)',
        'US694:Bloomberg', ]

    const usaMovies = [
        'US005:ACTION-MAX',
        'US019:Starz East',
        'US044:HALLMARK-MOVIES',
        'US045:HBO Comedy East',
        'US046:HBO East',
        'US047:HBO Signature West',
        'US048:HBO Zone East',
        'US054:Lifetime Movie',
        'US055:HBO 2',
        'US692:Starz Cinema',
        'US693:Starz Comedy',
        'US695:Starz Etas',
        'US696:Starz Edge HD',
        'US697:Starz Encore',
        'US698:Starz Encore East',
        'US699:Starz West',
        'US719:Starz Black HD',
        'US720:Starz Cinema East FHD',
        'US721:Starz Cinema West FHD',
        'US722:Starz Comedy East HD',
        'US723:Starz Comedy FHD',
        'US724:STARZ EDGE FHD',
        'US725:STARZ EDGE West HD',
        'US726:Starz Encore Action',
        'US727:Starz Encore Black HD',
        'US728:Starz Encore Classic FHD',
        'US729:Starz Encore EAST HD',
        'US730:Starz Encore Family FHD',
        'US731:Starz Encore Suspense HD',
        'US732:Starz Encore West FHD',
        'US733:Starz Family HD',
        'US735:STARZ KIDS & FAMILY FHD',
    ]

    const usaSport= [
        'US009:Bein-Sports',
        'US012:PAC-12 Washington',
        'US013:PAC-12 Los Angeles',
        'US014:PAC-12 Oregon',
        'US031:ESPN-2',
        'US032:ESPN-HD',
        'US034:ESPN-U',
        'US074:PAC-12 Bay Area',
        'US084:UFC Network',
        'US085:WWE-Network',
        'US086:Tennis',
        'US087:NESN',
        'US091:Sec Network',
        'US092:Big Ten Network',
        'US093:Box Nation',
        'US122:Olympic_Channel',
        'US123:BeIN8 Sports',
        'US124:BeIN7 Sports',
        'US125:BeIN6 Sports',
        'US126:BeIN5 Sports',
        'US127:BeIN4 Sports',
        'US128:BeIN2 Sports',
        'US129:BeIN_Sports',
        'US131:Game_Show_Network',
        'US132:Stadium3',
        'US133:Stadium2',
        'US134:Stadium1',
        'US135:Stadium',
        'US136:TyC Sports',
        'US137:MSG2Plus',
        'US138:MSG2',
        'US139:MSGPlus',
        'US140:MSG',
        'US141:BTN4',
        'US142:BTN3',
        'US143:BTN2',
        'US144:Big_Ten_Network',
        'US145:Fight_Network',
        'US146:FNTSY_Sports_Network',
        'US147:VSiN',
        'US148:Ginx_TV',
        'US149:ATT_SportsNet_SW_ALT',
        'US150:World_Fishing_Network',
        'US151:NESN_BOS',
        'US152:NESN_PLUS',
        'US153:Sportsman_Channel',
        'US155:Eleven_Sports',
        'US661:PVV BOXING 2',
        'US662:PPV BOXING 3',
        'US663:PPV BOXING 4',
        'US664:PPV BOXING 5',
    ]

    const usaAbc = [
        'US002:ABC HD',
        'US003:ABC-NEWS',
        'US004:ABC 7',
        'US700:ABC_kfsn_fresno',
        'US701:ABC_wisn_mil',
        'US702:ABC-wkrn-nas',
        'US703:ABC_wtnh_har',
        'US704:ABC_kmgh_den',
        'US705:ABC_wcvb_bos',
        'US706:ABC_wrtv_ind',
        'US709:ABC_wpvi_phi',
        'US710:ABC_wftv_orl',
        'US711:ABC_kgo_sfo',
        'US712:ABC_wfaa_dal',
        'US713:ABC Phoenix',
        'US714:ABC Indianapolis',
        'US715:ABC Cleveland',
        'US716:ABC Denver',
        'US717:ABC Sacramento',
        'US718:ABC Orlando',
        'US734:ABC Charlotte',
        'US737:Abc_Kgtv_Sad',
        'US738:ABC_wjla_wdc',
        'US739:ABC_kxtv-sac',
        'US740:ABC_kdnl-stl',
        'US741:ABC_komo_sea',
        'US742:ABC_katu_port',
        'US743:ABC_ktvx-slc',
        'US744:ABC_kABC_lax',
        'US745:ABC_wls_chi',
        'US746:ABC_wtae_pit',
        'US747:ABC_wxyz_det',
        'US748:ABC_ktrk_hou',
        'US749:ABC_knxv_phx',
        'US750:ABC_wisn_mil',
        'US751:ABC-wkrn-nas',
        'US752:ABC_wtnh_har',
        'US753:ABC_kmgh_den',
        'US754:ABC_wcvb_bos',
        'US755:ABC_wrtv_ind',
        'US756:ABC_wftv_orl',
        'US757:ABC_wfaa_dal',
        'US758:ABC_kgo_sfo',
        'US759:ABC_wpvi_phi',
        'US760:ABC_wtvd_raleigh',
        'US761:ABC_wplg_mia',
        'US762:ABC_kfsn_fresno',
        'US763:ABC_ksat_saa',
        'US764:ABC_kmbc_kan',
        'US765:ABC-wews-cla',
        'US766:ABC_WSYX_CLM',
        'US707:ABC_wplg_mia',
        'US708:ABC_wtvd_raleigh',
    ]

    const usaNhl =['US675:NHL Centre Ice 782',
    'US676:NHL Centre Ice 783',
    'US677:NHL Game 1',
    'US678:NHL Game 2',
    'US679:NHL Game 3',
    'US680:NHL Game 4',
    'US681:NHL Game 5',
    'US682:NHL Game 6',
    'US683:NHL Game 7',
    'US684:NHL Game 8',
    'US685:NHL Game 9',
    'US686:NHL Game 10',
    'US687:NHL Game 11',
    'US688:NHL Game 12',
    'US689:NHL Game 13',
    'US690:NHL Game 14',
    'US691:NHL Game 15',
    'US736:NHL NETWORK',
    ]

    const usaMbl=[
        'US056:MLB-Network',
        'US630:MLB 01',
        'US631:MLB 02',
        'US632:MLB 03',
        'US633:MLB 04',
        'US634:MLB 05',
        'US635:MLB 06',
        'US636:MLB 07',
        'US637:MLB 08',
        'US638:MLB 09',
        'US639:MLB 10',
        'US640:MLB 11',
        'US641:MLB 12',
        'US642:MLB 13',
        'US643:MLB 14',
        'US644:MLB 15',

    ]

    const usaNfl=['US064:NFL-Network',
    'US089:NFL RedZone',
    'US618:NFL 1',
    'US619:NFL 2',
    'US620:NFL 3',
    'US621:NFL 4 HD',
    'US622:NFL 5',
    'US623:NFL 6',
    'US624:NFL 7',
    'US625:NFL 8',
    'US626:NFL 9',
    'US627:NFL 14',
    'US628:NFL 15',
    'US629:NFL N',
    'US645:NFL Channel HD',
    'US646:NFL Gamepass 1',
    'US647:NFL GAMEPASS 2',
    'US648:NFL GAMEPASS 3',
    'US649:NFL GAMEPASS 4',
    'US650:NFL GAMEPASS 5',
    'US651:NFL GAMEPASS 6',
    'US652:NFL GAMEPASS 7',
    'US653:NFL GAMEPASS 8',
    'US654:NFL GAMEPASS 9',
    'US655:NFL GAMEPASS 10',
    'US656:NFL GAMEPASS 11',
    'US657:NFL GAMEPASS 12',
    'US658:NFL GAMEPASS 13',
    'US659:NFL Gamepass 14',
    ]

    const usaNbc = [
        'US061:NBC-Golf',
        'US062:NBC-HD',
        'US156:NBC_Golf_Channel',
        'US157:NBC_Sports_Philadelfia',
        'US158:NBC_Sports_Washington',
        'US159:NBC_Sports_California',
        'US160:NBC_Sports_Chicago',
        'US161:NBC_Sports_Bay_Area',
        'US162:NBC_Sports_Northwest',
        'US165:NBC_Sports_Network',
        'US502:NBC_KHQ',
        'US503:NBC_WPSD',
        'US504:NBC_KVLY',
        'US505:NBC_WFIE',
        'US506:NBC_WAGT',
        'US507:NBC_WFMJ',
        'US508:NBC_WBRE',
        'US509:NBC_KETK',
        'US510:NBC_WFLA',
        'US511:NBC_WWLP',
        'US512:NBC_KTAL',
        'US513:NBC_KING',
        'US514:NBC_WSAV',
        'US515:NBC_WEEK',
        'US516:NBC_WAVY',
        'US517:NBC_WSFA',
        'US518:NBC_KARK',
        'US519:NBC_WILX',
        'US520:NBC_WEAU',
        'US521:NBC_KVEO',
        'US522:NBC_WOOD',
        'US523:NBC_WPTA',
        'US524:NBC_WBBH',
        'US525:NBC_KSEE',
        'US526:NBC_KTSM',
        'US527:NBC_WDTN',
        'US528:NBC_KWQC',
        'US529:NBC_KRIS',
        'US530:NBC_WCMH',
        'US531:NBC_WLTZ',
        'US532:NBC_KXAN',
        'US533:NBC_KXAS',
        'US534:NBC_KPRC',
        'US535:NBC_WTVJ',
        'US536:NBC_WLEX',
        'US537:NBC_WCSH',
        'US538:NBC_WMFP',
        'US539:NBC_KGW',
        'US540:NBC_KARE',
        'US541:NBC_WAND',
        'US542:NBC_KPNX',
        'US543:NBC_WDSU',
        'US544:NBC_WLBT',
        'US545:NBC_KTVB',
        'US546:NBC_WVVA',
        'US547:NBC_WNDU',
        'US548:NBC_WESH',
        'US549:NBC_WMBF',
        'US550:NBC_WVTM',
        'US551:NBC_KCRA',
        'US552:NBC_WMAQ',
        'US553:NBC_WSMV',
        'US554:NBC_WCNC',
        'US555:NBC_WSLS',
        'US556:NBC_WTMJ',
        'US557:NBC_KUSA',
        'US558:NBC_WBIR',
        'US559:NBC_WTLV',
        'US560:NBC_KSNB',
        'US561:NBC_WGRZ',
        'US562:NBC_WAFF',
        'US563:NBC_KNBC',
        'US564:NBC_WKYC',
        'US565:NBC_WITN',
        'US566:NBC_WDIV',
        'US567:NBC_WTHR',
        'US568:NBC_KDLT',
        'US569:NBC_KOAA',
        'US570:NBC_KVOA',
        'US571:NBC_WLWT',
        'US572:NBC_KYTV',
        'US573:NBC_WRC',
        'US574:NBC_KSHB',
        'US575:NBC_WVIT',
        'US576:NBC_WRAL',
        'US577:NBC_WBAL',
        'US578:NBC_WNYT',
        'US579:NBC_WSAZ',
        'US580:NBC_KCEN',
        'US581:NBC_WCAU',
        'US582:NBC_KSDK',
        'US583:NBC_KHNL',
        'US584:NBC_WMTV',
        'US585:NBC_KJRH',
        'US586:NBC_WMC',
        'US587:NBC_WXII',
        'US588:NBC_KSBY',
        'US589:NBC_WECT',
        'US590:NBC_KSBW',
        'US591:NBC_WXIA',
        'US592:NBC_WOWT',
        'US593:NBC_WPXI',
        'US594:NBC_KSL',
        'US595:NBC_WIS',
        'US596:NBC_WWBT',
        'US597:NBC_WHEC',
        'US598:NBC_KNTV',
        'US599:NBC_WYFF',
        'US600:NBC_WPTZ',
        'US601:NBC_WPTV',
        'US602:NBC_WJHG',
        'US603:NBC_WGBA',
        'US604:NBC_KOB',
        'US605:NBC_WGAL',
        'US606:NBC_WAVE',
        'US607:NBC_KNSD',
        'US608:NBC_WNBC',
        'US609:NBC_KGET',
        'US610:NBC_KWWL',
        'US611:NBC_KTIV',
        'US612:NBC_KNDO',

    ]

    const usaCbs = ['US017:CBS-HD',
    'US088:CBS Sports Network',
    'US154:CBS_Sports_Network',
    'US166:CBS_WKBN',
    'US167:CBS_KIMA',
    'US168:CBS_WWAY',
    'US169:CBS_WYOU',
    'US172:CBS_WPEC',
    'US175:CBS_WTVH',
    'US179:CBS_WJHL',
    'US182:CBS_KOLR',
    'US184:CBS_WCIA',
    'US186:CBS_KELO',
    'US187:CBS_KUTV',
    'US193:CBS_KTVN',
    'US197:CBS_WNCN',
    'US199:CBS_WPRI',
    'US200:CBS_KOIN',
    'US201:CBS_WGME',
    'US202:CBS_WMBD',
    'US203:CBS_WBTW',
    'US204:CBS_WAKA',
    'US205:CBS_WKRG',
    'US206:CBS_KLAS',
    'US207:CBS_WLNS',
    'US208:CBS_KLFY',
    'US209:CBS_WKBT',
    'US210:CBS_WTAJ',
    'US211:CBS_WJTV',
    'US212:CBS_WHP',
    'US213:CBS_KGBT',
    'US214:CBS_WSPA',
    'US215:CBS_WNCT',
    'US216:CBS_WFRV',
    'US217:CBS_WWMT',
    'US218:CBS_WANE',
    'US219:CBS_KGPE',
    'US220:CBS_KVAL',
    'US221:CBS_KDBC',
    'US222:CBS_WHBF',
    'US223:CBS_KZTV',
    'US224:CBS_WCBI',
    'US225:CBS_WKRC',
    'US226:CBS_WOWK',
    'US227:CBS_KGAN',
    'US228:CBS_WIVB',
    'US229:CBS_KBOI',
    'US231:CBS_WIAT',
    'US232:CBS_KBAK',
    'US233:CBS_KEYE',
    'US234:CBS_KRQEDT',
    'US235:CBS_WRGB',
    'US236:CBS_WTVF',
    'US238:CBS_WJAX',
    'US240:CBS_WCSC',
    'US245:CBS_KTXA',
    'US246:CBS_WOIO',
    'US254:CBS_WTSP',
    'US259:CBS_KTVT',
    'US269:CBS_KOLN',
    'US273:CBS_KOLD',
    'US274:CBS_KCTV',
    'US275:CBS_WBNS',
    'US276:CBS_WNEM',
    'US277:CBS_WUSA',
    'US278:CBS_WTOL',
    'US279:CBS_WTOC',
    'US280:CBS_WFSB',
    'US281:CBS_KFVS',
    'US282:CBS_KPIX',
    'US283:CBS_KCOY',
    'US284:CBS_KPHO',
    'US285:CBS_WWL',
    'US286:CBS_WWJ',
    'US287:CBS_WFOR',
    'US288:CBS_KWTX',
    'US289:CBS_WKYT',
    'US290:CBS_KWTV',
    'US291:CBS_KSLA',
    'US292:CBS_WBFS',
    'US293:CBS_WDJT',
    'US294:CBS_WFMY',
    'US295:CBS_WRDW',
    'US296:CBS_WVLT',
    'US297:CBS_WISC',
    'US298:CBS_KENS',
    'US299:CBS_KDKA',
    'US300:CBS_WBBM',
    'US301:CBS_KREM',
    'US302:CBS_WCCO',
    'US303:CBS_KTHV',
    'US304:CBS_KYW',
    'US305:CBS_KFMB',
    'US306:CBS_WDEF',
    'US307:CBS_WSBK',
    'US308:CBS_WCBS',
    'US309:CBS_KIRO',
    'US310:CBS_WLTX',
    'US311:CBS_WCAX',
    'US312:CBS_KHOU',
    'US313:CBS_KGMB',
    'US314:CBS_KKTV',
    'US315:CBS_WDBJ',
    'US316:CBS_KCCI',
    'US317:CBS_KION',
    'US318:CBS_WHIO',
    'US319:CBS_KCBS',
    'US320:CBS_KCAL',
    'US321:CBS_WJZ',
    'US322:CBS_WKMG',
    'US323:CBS_KMTV',
    'US324:CBS_WLNY',
    'US325:CBS_WGCL',
    'US326:CBS_KOVR',
    'US327:CBS_WLKY',
    'US328:CBS_KOTV',
    'US329:CBS_KWCH',
    'US330:CBS_KMOV',
    'US331:CBS_WBTV',
    'US332:CBS_WBZ',
    ]

    const usaFox=['US036:FOX-HD',
    'US037:FOX-News',
    'US038:FOX-Sports1',
    'US039:FOX-Sports2',
    'US090:Fox Sports Yes',
    'US094:Fox Business Network',
    'US099:Fox_Sports_NetBase',
    'US100:Fox_Sports_SportsTime_Ohio',
    'US101:Fox_Sports_YES_Network',
    'US102:Fox_Sports_San_Diego',
    'US103:Fox_Sports_Sun',
    'US104:Fox_Sports_Detroit',
    'US105:Fox_Sports_Ohio',
    'US106:Fox_Sports_North',
    'US107:Fox_Sports_Midwest',
    'US108:Fox_Sports_Florida',
    'US109:Fox_Sports_Arizona',
    'US110:Fox_Sports_Wisconsin',
    'US111:Fox_Sports_West',
    'US112:Fox_Sports_South',
    'US113:Fox_Sports_Southeast',
    'US114:Fox_Sports_Southwest_Plus',
    'US115:Fox_Sports_Southwest',
    'US116:Fox_College_Sports_Atlantic',
    'US117:Fox_College_Sports_Pacific',
    'US118:Fox_College_Sports_Central',
    'US119:Fox_Sports_Soccer_Plus',
    'US120:Fox_Sports_2',
    'US121:Fox_Sports_1',
    'US334:fox-kcop-lax',
    'US335:fox-kptv-por',
    'US336:FOX_WYFX',
    'US337:FOX_WFLX',
    'US338:FOX_WUPW',
    'US339:FOX_WSYT',
    'US340:FOX_KAYU',
    'US341:FOX_KRXI',
    'US342:FOX_WYZZ',
    'US343:FOX_WSYM',
    'US344:FOX_KADN',
    'US345:FOX_WLAX',
    'US346:FOX_WDBD',
    'US364:FOX_KFXV',
    'US365:FOX_WEVV2',
    'US366:FOX_KFOX',
    'US367:FOX_KSCC',
    'US368:FOX_KNIN',
    'US369:FOX_WBRC',
    'US370:FOX_WFXG',
    'US371:FOX_KICU',
    'US372:FOX_WTWC',
    'US373:FOX_WJBK',
    'US374:FOX_WTVT',
    'US378:FOX_KLJB',
    'US379:FOX_WOLF',
    'US380:FOX_WTVC',
    'US382:FOX_WPMT',
    'US385:FOX_KKFX',
    'US389:FOX_KTXL',
    'US390:FOX_WTTG',
    'US398:FOX_WTTE',
    'US399:FOX_WFXT',
    'US400:FOX_WFXR',
    'US407:FOX_WFXB',
    'US416:FOX_KBSI',
    'US417:FOX_KSTU',
    'US418:FOX_KTVU',
    'US420:FOX_WUTV',
    'US421:FOX_KTVI',
    'US425:FOX_KDVR',
    'US426:FOX_WOGX',
    'US427:FOX_KOKI',
    'US428:FOX_KOKH',
    'US429:FOX_WDRB',
    'US430:FOX_KRQE',
    'US431:FOX_WGXA',
    'US432:FOX_WVUE',
    'US433:FOX_KTTW',
    'US434:FOX_KTTV',
    'US435:FOX_WOFL',
    'US436:FOX_WRLH',
    'US437:FOX_WFTX',
    'US438:FOX_KFXL',
    'US439:FOX_KFXK',
    'US440:FOX_WXXA',
    'US441:FOX_WPGH',
    'US442:FOX_WSMH',
    'US443:FOX_KDSM',
    'US444:FOX_WTNZ',
    'US445:FOX_WPFO',
    'US446:FOX_KCPQ',
    'US447:FOX_WJZY',
    'US448:FOX_WNAC',
    'US449:FOX_WAGA',
    'US450:FOX_WRGT',
    'US451:FOX_WDKY',
    'US452:FOX_WFOX',
    'US453:FOX_KVRR',
    'US454:FOX_KRIV',
    'US455:FOX_WBFF',
    'US456:FOX_WITI',
    'US457:FOX_WTIC',
    'US458:FOX_WACH',
    'US459:FOX_WZTV',
    'US460:FOX_WTGS',
    'US461:FOX_WFLD',
    'US462:FOX_KXRM',
    'US463:FOX_WGMB',
    'US464:FOX_WUHF',
    'US465:FOX_WRAZ',
    'US466:FOX_WXMI',
    'US467:FOX_WNYW',
    'US468:FOX_WSBT',
    'US469:FOX_WLUK',
    'US470:FOX_KABB',
    'US471:FOX_KHON',
    'US472:FOX_KRBK',
    'US473:FOX_KDFW',
    'US474:FOX_WFFT',
    'US475:FOX_WGHP',
    'US476:FOX_KWKT',
    'US477:FOX_WXIX',
    'US478:FOX_WTAT',
    'US479:FOX_WFFF',
    'US480:FOX_WXIN',
    'US481:FOX_WDAF',
    'US482:FOX_WMSN',
    'US483:FOX_KSAZ',
    'US484:FOX_KSAS',
    'US485:FOX_KCBA',
    'US486:FOX_WPWR',
    'US487:FOX_WVBT',
    'US488:FOX_KTBC',
    'US489:FOX_KLRT',
    'US490:FOX_WVAH',
    'US491:FOX_KMSS',
    'US492:FOX_KMSP',
    'US493:FOX_KMSB',
    'US494:FOX_WHBQ',
    'US495:FOX_KMPH',
    'US496:FOX_WJW',
    'US497:FOX_WZDX',
    'US498:FOX_KPTM',
    'US499:FOX_WSVN',
    'US500:FOX_WTXF',
    'US501:FOX_WRSP',
    ]

    const caGeneral = [
        'CA001:ABC-SPARK',
    'CA006:BET',
    'CA008:BRAVO',
    'CA011:CHCH',
    'CA012:CITY-TV',
    'CA015:COTTAGE-LIFE',
    'CA017:CPAC',
    'CA018:ABC West',
    'CA026:DIY',
    'CA027:DTOUR',
    'CA030:FOOD-NETWORK',
    'CA031:FOX-EAST',
    'CA033:FXX-HD',
    'CA034:GLOBAL-EAST',
    'CA036:GUSTO',
    'CA039:HGTV',
    'CA045:ME-TV',
    'CA047:MTV-canada',
    'CA048:MUCHMUSIC',
    'CA051:Sportsnet World',
    'CA052:OLN',
    'CA054:OWN',
    'CA055:PEACH-TREE',
    'CA056:SLICE',
    'CA063:TLC',
    'CA071:Game TV',
    'CA073:WEATHER-CHANNEL',
    'CA074:TVA Montreal',
    'CA078:V Montreal FR',
    'CA084:ABC EAST',
    'CA087:AHC',
    'CA088:APTN',
    'CA089:ARTV',
    'CA090:Assemblée Nationale Québec',
    'CA093:BOOK TV',
    'CA097:CASA',
    'CA106:CITY TORONTO',
    'CA107:CITY VANCOUVER',
    'CA108:CMT CANADA',
    'CA111:COMEDY GOLD',
    'CA112:COOKING CHANNEL',
    'CA113:COSMO',
    'CA114:CPAC FRENCH',
    'CA121:CW 11',
    'CA122:DAYSTAR TV',
    'CA123:DEJAVIEW',
    'CA127:ENCORE 1 EAST',
    'CA128:ENCORE 2 EAST',
    'CA134:FOX WEST',
    'CA135:FTV CANADA',
    'CA136:FYI',
    'CA137:GLOBAL TORONTO',
    'CA138:GLOBAL VANCOUVER',
    'CA144:ICI MONTREAL',
    'CA145:ICI VANCOUVER',
    'CA148:KTLA',
    'CA150:MAX',
    'CA151:METEO',
    'CA152:MIRACLE',
    'CA153:MOI CIE',
    'CA155:MTV 2',
    'CA156:MUSIQUE PLUS',
    'CA158:VISION',
    'CA159:VRAK TV',
    'CA160:WFN',
    'CA162:Wild TV',
    'CA163:WSBK',
    'CA166:ZESTE',
    'CA167:TFO',
    'CA168:THE WEATHER NETWORK',
    'CA174:OMNI 1',
    'CA175:OMNI 2',
    'CA176:ONE',
    'CA177:OUTTV',
    'CA178:PEACH TREE',
    'CA179:PRISE',
    'CA184:SERIS',
    'CA185:SHOPPING',
    'CA199:NBC EAST',
    'CA200:NBC WEST',
    'CA201:CITY MONTREAL',
    'CA202:MAKEFUL',
    'CA205:GLOBAL HALIFAX',
    'CA206:HOPE TV',
    'CA208:UNIS TV',
    'CA215:CITY CALGARY',
    'CA217:GLOBAL CALGARY',
    ]

    const caMovies = [
        'CA003:AMC',
        'CA014:COMEDY',
        'CA037:HBO-EAST',
        'CA038:HBO-WEST',
        'CA044:LIFETIME',
        'CA046:ShowCase CA',
        'CA058:SPACE',
        'CA079:SUPER CHANNEL VAULT',
        'CA085:ACTION',
        'CA086:ADDIK TV',
        'CA105:CINEPOP',
        'CA141:HBO 1',
        'CA142:HBO 2',
        'CA146:ICI RDI',
        'CA154:MTIME',
        'CA165:Z TELE',
        'CA186:SILVER SCREEN CLASSICS',
        'CA187:SPIKE TV / PARAMOUNT CANADA',
        'CA193:TCM',
    ]

    const caSport = [
        'CA002:SPORTSNET-ONTARIO',
        'CA032:NBA CA',
        'CA059:SPORTSNET-360',
        'CA060:SPORTSNET-EAST',
        'CA061:SPORTSNET-ONE',
        'CA062:SPORTSNET-WEST',
        'CA065:TSN-1',
        'CA066:TSN-2',
        'CA067:TSN-3',
        'CA068:TSN-4',
        'CA069:TSN-5',
        'CA075:YES-HD',
        'CA076:TVA FR',
        'CA077:TVA Sports FR',
        'CA082:RDS FR',
        'CA132:FIGHT NETWORK',
        'CA139:GOLF',
        'CA188:SPORTSNET PACIFIC',
        'CA189:SUPER ECRAN 1',
        'CA190:SUPER ECRAN 2',
        'CA191:SUPER ECRAN 3',
        'CA192:SUPER ECRAN 4',
        'CA203:MLB NETWORK',
        'CA210:MAVTV CANADA',
        'CA218:SPORTSMAN CHANNEL CANADA',
        'CA219:SUPER CHANNEL FUSE',
        'CA220:SUPER CHANNEL HEART & HOME',

    ]

    const caNews=[
        'CA005:TMN-1',
        'CA007:BNN',
        'CA009:CBC-EAST',
        'CA010:CBC-NEWS-NETWORK',
        'CA013:CNN',
        'CA016:CP24',
        'CA019:CTV',
        'CA020:CTV Atlantic',
        'CA021:CTV-NEWS',
        'CA028:E!',
        'CA035:GSN',
        'CA041:HLN',
        'CA053:W-NETWORK',
        'CA080:LCN FR',
        'CA081:RDI FR',
        'CA091:BBC CANADA',
        'CA092:BBC WORLD NEWS',
        'CA098:CBC MONTREAL',
        'CA099:CBC NEWS',
        'CA100:CBC OTTAWA',
        'CA101:CBC TORONTO',
        'CA102:CBC VANCOUVER',
        'CA103:CBS EAST',
        'CA104:CBS WEST',
        'CA109:CNBC',
        'CA110:CNN INTERNATIONAL',
        'CA116:CTV 2 VANCOUVER',
        'CA117:CTV OTTAWA',
        'CA118:CTV TORONTO',
        'CA119:CTV VANCOUVER',
        'CA120:CTV2 OTTAWA',
        'CA133:FOX NEWS',
        'CA149:LCN',
        'CA157:VIE',
        'CA161:WGN',
        'CA169:CRAVE 2 / TMN 2',
        'CA170:CRAVE 3 / TMN 3',
        'CA171:CRAVE 4 / TMN 4',
        'CA172:TV5 QUEBEC',
        'CA173:NTV',
        'CA180:RDI',
        'CA181:RDS',
        'CA182:RDS 2',
        'CA183:RDS INFO',
        'CA204:CTV HALIFAX',
        'CA207:CBC NOVA SCOTIA',
        'CA212:MEDIASET ITALIA CANADA',
        'CA214:CBC CALGARY',
        'CA216:CTV CALGARY',

    ]

    const caKids = ['CA023:DISNEY',
    'CA024:DISNEY-JR',
    'CA025:DISNEY-XD',
    'CA029:FAMILY',
    'CA043:PBS',
    'CA064:TREEHOUSE',
    'CA070:TVO',
    'CA072:YTV',
    'CA096:CARTOON NETWORK',
    'CA125:DISNEY FRENCH',
    'CA130:FAMILY CHRGD',
    'CA131:FAMILY JR',
    'CA147:KNOWLEDGE KIDS',
    'CA164:YOOPA',
    'CA194:TELE LATINO',
    'CA195:TELE QUEBEC',
    'CA196:TELE TOON EAST',
    'CA197:TELE TOON FRENCH',
    'CA198:TELEMAGINO',
    'CA209:NICK',
    'CA211:FX FHD',
    ]

    const caDocum = ['CA004:ANIMAL-PLANET',
    'CA022:DISCOVERY',
    'CA040:HISTORY',
    'CA042:ID',
    'CA049:NAT-GEO',
    'CA050:NAT-GEO-WILD',
    'CA057:SMITHSONIAN',
    'CA083:A&E',
    'CA094:CANAL D',
    'CA095:CANAL SAVOIR',
    'CA115:CRIME INVEST',
    'CA124:DISCOVERY SCIENCE CANADA',
    'CA126:DOCUMENTARY',
    'CA129:EVASION',
    'CA140:H2 CANADA',
    'CA143:HISTORIO',
    'CA213:TRAVEL ESCAPE',
    '24/7: UK Stand Up',
    '24/7: Two Pints Of Lager And A Packet Of Crisps',
    '24/7: Two And A Half Men',
    '24/7: True Blood',
    '24/7: Transformers',
    '24/7: Trailer Park Boys',
    '24/7: Top Cat',
    '24/7: Tom And Jerry',
    '24/7: The Young Ones',
    '24/7: The Wonder Years',
    '24/7: The Walking Dead',
    '24/7: The Vicar of Dibley',
    '24/7: The Vampire Diaries',
    '24/7: The Transporter',
    '24/7: The Spectacular Spider man',
    '24/7: The Sopranos',
    '24/7: The Simpsons',
    '24/7: The Royle Family',
    '24/7: The Regular Show',
    '24/7: The Office US',
    '24/7: The Office UK',
    '24/7: The Munsters',
    '24/7: The Likely Lads',
    '24/7: The League Of Gentlemen',
    '24/7: The King Of Queens',
    '24/7: The IT Crowd',
    '24/7: The Inbetweeners',
    '24/7: The Hunger Games',
    '24/7: The Good Place',
    '24/7: The Good Life',
    '24/7: The Golden Girls',
    '24/7: The Goldbergs',
    '24/7: The Flintstones',
    '24/7: The Flash',
    '24/7: The Fast And Furious',
    '24/7: The Big Bang Theory',
    '24/7: The Batman',
    '24/7: The A Team',
    '24/7: Superhero Movies',
    '24/7: Stranger Things',
    '24/7: Steven Universe',
    '24/7: Steptoe and son',
    '24/7: Star Wars The Clone Wars',
    '24/7: Star Wars Rebels',
    '24/7: Star Wars',
    '24/7: Star Trek',
    '24/7: Spongebob Square Pants',
    '24/7: Spider Man',
    '24/7: South Park',
    '24/7: Some Mothers Do Ave Em',
    '24/7: Simpsons:Treehouse of Horror',
    '24/7: Sherlock',
    '24/7: Sgt Bilko',
    '24/7: Sex In The City',
    '24/7: Seinfeld',
    '24/7: Scrubs',
    '24/7: Scream Queens',
    '24/7:SANTA CLARITA DIET',
    '24/7: Scifi Movies',
    '24/7: Rugrats',
    '24/7: Roseanne',
    '24/7: Rocky',
    '24/7: Rising Damp',
    '24/7: Ricky Gervais Stand Up',
    '24/7: Rick And Morty',
    '24/7: Red Dwarf',
    '24/7: Prison Break',
    '24/7: Popeye',
    '24/7: Poldark',
    '24/7: Pokemon',
    '24/7: Pirates of the Caribbean',
    '24/7: Peter Kay’s Phoenix Nights',
    '24/7: Peter Kay stand up',
    '24/7: Peppa Pig',
    '24/7: Peep Show',
    '24/7: Peaky Blinders',
    '24/7: Paw Patrol',
    '24/7: Ozark',
    '24/7: Orange Is the New Black',
    '24/7: Only Fools And Horses',
    '24/7: My Family',
    '24/7: Mrs Browns Boys',
    '24/7: Mr Bean Animated',
    '24/7: Mr Bean',
    '24/7: Monkey Magic',
    '24/7: Mission Impossible',
    '24/7: Mindhunter',
    '24/7: Minder',
    '24/7: Micky Flanagan stand up',
    '24/7: Mickey Mouse Clubhouse',
    '24/7: Michael Moore',
    '24/7: Michael McIntyre stand up',
    '24/7: Miami Vice',
    '24/7: Men Behaving Badly',
    '24/7: Matrix',
    '24/7: Master of None',
    '24/7: Married with Children',
    '24/7: Malcolm in the Middle',
    '24/7: Lucifer',
    '24/7: Lord of the Rings',
    '24/7: Looney Tunes',
    '24/7: Little Britain',
    '24/7: Life on mars',
    '24/7: Lethal Weapon',
    '24/7: Lego Star wars',
    '24/7: Knight Rider',
    '24/7: King of the hill',
    '24/7:Kevin Hart Stand Up',
    '24/7: Just Good Friends',
    '24/7: Johny Test',
    '24/7: Jimmy Carr Stand up',
    '24/7: Jason Bourne',
    '24/7: James Bond',
    '24/7: Jackass',
    '24/7: Indiana Jones',
    '24/7: In the Night Garden',
    '24/7: How I Met Your Mother',
    '24/7: House of Cards',
    '24/7: Harry Potter',
    '24/7: Happy Days',
    '24/7: Halloween',
    '24/7: Gotham',
    '24/7: Goodnight Sweetheart',
    '24/7: Glow',
    '24/7: Gavin and Stacey',
    '24/7: Game of Thrones',
    '24/7: Futurama',
    '24/7: Friends',
    '24/7: Friday The 13TH',
    '24/7: Fresh Prince of Bel Air',
    '24/7: Frasier',
    '24/7: Fireman Sam',
    '24/7:Film Noir movies',
    '24/7:Fawlty Towers',
    '24/7:Father Ted',
    '24/7:Fargo',
    '24/7:Family Guy',
    '24/7:Everybody Loves Raymond',
    '24/7:Ever Decreasing Circles',
    '24/7:Entourage',
    '24/7:Dreamworks animation',
    '24/7:Dragon Ball Z',
    '24/7:Dr Who',
    '24/7:Dr Seuss',
    '24/7:Downton abbey',
    '24/7:Dora the Explorer',
    '24/7:Disney Movies 2',
    '24/7:Disney Movies',
    '24/7:Disney',
    '24/7:Dexter',
    '24/7:Desperate Housewives',
    '24/7:Deadwood',
    '24/7:Daredevil',
    '24/7:Dallas',
    '24/7:Dads Army',
    '24/7:Curb Your Enthusiasm',
    '24/7:Crime Movies',
    '24/7:Chris Rock stand up',
    '24/7:Cheers',
    '24/7:Buffy the Vampire Slayer',
    '24/7:Bruce Lee',
    '24/7:Breaking Bad',
    '24/7:Bottom',
    '24/7:Bobs Burgers',
    '24/7:Boardwalk Empire',
    '24/7:Blackadder',
    '24/7:Billy Connolly Stand up',
    '24/7:Benidorm',
    '24/7:Batman the Animated Series',
    '24/7:BATMAN Brave and the Bold',
    '24/7:Batman 1966',
    '24/7:Avatar',
    '24/7:Asterix',
    '24/7:Arrow',
    '24/7:Arrested Development',
    '24/7:American Dad',
    '24/7:Alan Partridge',
    '24/7:Adventure Time',
    '24/7:24',
    '24/7:13 Reasons why',
    '24/7:Underworld Movies',
    '24/7:Ted Movies',
    '24/7:Pirates of The Caribbean Movies',
    '24/7:Hot Tub Time Machine Movies',
    '24/7:Blade Movies',
    '24/7:Batwoman Show',
    '24/7:Sports Moviess',
    '24/7:Romance Movies',
    '24/7:First Dates Show',
    '24/7:My Lottery Dream Home Show',
    '24/7:Ripley’s Believe It or Not! Show',
    '24/7:The Vet Life Show',
    '24/7:What We Do in The Shadows Show',
    '24/7:Winner Cake All Show',
    '24/7:Gangland Show',
    '24/7:Fraggle Rock Show',
    '24/7:24 Hours in Police Custody Show',
    '24/7:Nature’s Strangest Mysteries- Solved Show',
    '24/7:Word Party Show',
    '24/7:NOS4A2 Show',
    '24/7:Doom Patrol Show',
    '24/7:Gangland Undercover Show',
    '24/7:The Society Show',
    '24/7:Ramy Show',
    '24/7:On My Block Show',
    '24/7:Bar Rescue Show',
    '24/7:Man With a Plan Show',
    '24/7:Tin Star Show',
    '24/7:Peppa Pig Show',
    '24/7:Drug Wars Show',
    '24/7:Truck Night in America Show',
    '24/7:Building Off The Grid Show',
    '24/7:Meet The Parents Movies',
    '24/7:Crickey! It’s the Irwins Show',
    '24/7:Deadly Class Show',
    '24/7:For the Love of Cars Show',
    '24/7:Storage Hunters Show',
    '24/7:Titanic',
    '24/7:Black Hawk Down',
    ',24/7:Little Giants',
    '24/7:Spaceballs',
    '24/7:The Umbrella Academy Show',
    '24/7:Mrs Brown’s Boys Show',
    '24/7:Mysteries of the Abandoned Show',
    '24/7:Insane Pools: Off The Deep End Show',
    '24/7:Step Up – High Water Show',
    '24/7:Night Night Show',
    '24/7:Chilling Adventures of Sabrina Show',
    '24/7:Flip Flop Vegas Show',
    '24/7:Early Doors Show',
    '24/7:Dr. Pimple Popper Show',
    '24/7:Auf Wiedersehen, Pet Show',
    '24/7:Van Damme Movies',
    '24/7:Vampire Movies',
    '24/7:Transformers Movies',
    '24/7:The Mummy Movies',
    '24/7:The Hangover Movies',
    '24/7:The Blue Planet Show',
    '24/7:Star Wars Movies',
    '24/7:Scooby-Doo Movies',
    '24/7:Rick and Morty Show',
    '24/7:Puppy Dog Pals Show',
    '24/7:Predator/Alien Movies',
    '24/7:Naked and Afraid Show',
    '24/7:Major League Movies',
    '24/7:Lucifer Show',
    '24/7:Lethal Weapon Movies',
    '24/7:Kevin Can Wait Show',
    '24/7:Jurassic Park Movies',
    '24/7:Jersey Shore Family Vacation Show',
    '24/7:Harry Potter Movies',
    '24/7:Fast and Furious Movies',
    '24/7:Cobra Kai Show',
    '24/7:Boxing Movies',
    '24/7:Black Mirror Show',
    '24/7:Back to The Future Movies',
    '24/7:Ash vs Evil Dead Show',
    ]

    const plDocum = ['PL004:ANIMAL PLANET HD',
    'PL011:BBC Earth HD',
    'PL030:Discovery Channel FHD',
    'PL031:Discovery HISTORIA',
    'PL032:Discovery Life FHD',
    'PL033:Discovery Science FHD',
    'PL034:Discovery Turbo Xtra HD',
    'PL035:Disney Channel FHD',
    'PL056:FOKUS TV',
    'PL061:H2 HD',
    'PL066:HISTORY CHANNEL HD',
    'PL078:MUZYKA POLSKA',
    'PL079:NAT GEO FHD',
    'PL080:NAT GEO PEOPLE HD',
    'PL081:NAT GEO Wild HD',
    'PL086:Paramount Channel FHD',
    'PL105:POLSAT Viasat Explore FHD',
    'PL106:Polsat Viasat History FHD',
    'PL107:Polsat Viasat Nature HD',
    'PL109:PULS 2',
    'PL117:TLC FHD',
    'PL131:TVN Turbo FHD',
    'PL136:TVP Historiy HD',
    'PL147:BBC',
    'PL148:ZOOM TV',
    'PL153:ADVENTURE HD',
    'PL158:Canal Seriale HD',
    'PL167:Discovery Channel',
    'PL168:Discovery Life HD',
    'PL171:DTX',
    'PL178:FOKUS TV',
    'PL181:H2 HD',
    'PL191:Nat Geo People HD',
    'PL200:Polsat Viasat Explore HD',
    'PL201:Polsat Viasat History HD',
    'PL202:Polsat Viasat Nature',
    ]



  return (
    
    <>
        <Head>
            <title>FAQ-UK-Canada-France...-#1 Best IPTV Subscription Service Provider</title>
            <meta name="description" content="Infinity IPTV redefined with our top IPTV subscription. Non-stop sports, extensive channels, all under the Best IPTV UK service. Satisfaction guaranteed. Experience the difference today." />
            <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="generator" content="Next.js" />
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content="Infinity IPTV - Best IPTV Subscription Service Provider"/>
            <meta property="og:description" content="Infinity IPTV redefined with our top IPTV subscription. Non-stop sports, extensive channels, all under the Best IPTV UK service. Satisfaction guaranteed. Experience the difference today."/>
            <meta name="keywords" content="iptv subscription, iptv subscription legal, best iptv subscription, iptv subscription reddit, 
                ipTv Infinity subscription, iptv smarters pro subscription, iptv smarters subscription, iptv subscription ebay,
                ip tv subscription, iptv subscribe, iptv sub, iptv smarters subscription reddit, iptvsubscription tv, iptv subscription service,
                iptv 12 months, iptv lifetime subscription, iptv subscription provider, iptv subscription so player, best iptv subscription for firestick,
                buy iptv subscription, mag subscription, best iptv subscription 2023 reddit, best iptv subscription for firestick reddit,
                iptv subscription dubai, iptv subscription canada reddit, iptv smarters subscription aliexpress, iptv subscription saudi arabia,
                iptv subscription for apple tv 4k, iptv box and subscription, iptv box monthly, iptv box price, iptv subscription uk reddit,
                iptv subscription uk ebay, reddit best iptv subscription, smart iptv subscription ebay,smart iptv subscription reddit,
                mag 322 w1 iptv box subscription, best arabic iptv 2023 subscription services, 
                " />
            <meta property="og:url" content="https://www.iptvinfinity.tech"/>
            <meta property="og:site_name" content="IPTV-Infinity"/>
            <meta property="og:image" content="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/ogimage.PNG"/>
        </Head>

        <div>
          <div className={`${styles.menbackgound}`}></div>

          <section className={`container-fluid pt-5 pb-2 ${styles.section1}`}>
              <h1 className="fs-1 fw-bolder text-black pt-5 text-white mt-3 text-center mb-4">Channels List</h1>
              
              <div className="accordion accordion-flush" id="accordionFlushExample">

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse1"
                      aria-expanded="false"
                      aria-controls="flush-collapse1"
                    >
                      <strong>USA:—–|GENERAL|——————————–</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            useGenaral.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>


                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2"
                      aria-expanded="false"
                      aria-controls="flush-collapse2"
                    >
                      <strong>USA:—–|MOVIES|———————————</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            usaMovies.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse3"
                      aria-expanded="false"
                      aria-controls="flush-collapse3"
                    >
                      <strong>USA:—–|SPORTS|———————————</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            usaSport.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse4"
                      aria-expanded="false"
                      aria-controls="flush-collapse4"
                    >
                      <strong>USA:—–|ABC|————————————</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            usaAbc.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>
                

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse5"
                      aria-expanded="false"
                      aria-controls="flush-collapse5"
                    >
                      <strong>USA:—–|NHL|————————————</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            usaNhl.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse6"
                      aria-expanded="false"
                      aria-controls="flush-collapse6"
                    >
                      <strong>USA:—–|MLB|————————————</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            usaMbl.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse7"
                      aria-expanded="false"
                      aria-controls="flush-collapse7"
                    >
                      <strong>USA:—–|NFL|————————————</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            usaNfl.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse8"
                      aria-expanded="false"
                      aria-controls="flush-collapse8"
                    >
                      <strong>USA:—–|NBC|————————————</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            usaNbc.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse9"
                      aria-expanded="false"
                      aria-controls="flush-collapse9"
                    >
                      <strong>USA:—–|CBS|————————————</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            usaCbs.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse10"
                      aria-expanded="false"
                      aria-controls="flush-collapse10"
                    >
                      <strong>USA:—–|FOX|————————————</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            usaFox.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse11"
                      aria-expanded="false"
                      aria-controls="flush-collapse11"
                    >
                      <strong>CA:—–|GENERAL|————————————-</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse11"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            caGeneral.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse12"
                      aria-expanded="false"
                      aria-controls="flush-collapse12"
                    >
                      <strong>CA:—–|MOVIES|————————————–</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse12"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            caMovies.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse13"
                      aria-expanded="false"
                      aria-controls="flush-collapse13"
                    >
                      <strong>CA:—–|SPORTS|————————————–</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse13"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            caSport.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse14"
                      aria-expanded="false"
                      aria-controls="flush-collapse14"
                    >
                      <strong>CA:—–|NEWS|—————————————-</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse14"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            caNews.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse15"
                      aria-expanded="false"
                      aria-controls="flush-collapse15"
                    >
                      <strong>CA:—–|KIDS|—————————————-</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse15"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            caKids.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse16"
                      aria-expanded="false"
                      aria-controls="flush-collapse16"
                    >
                      <strong>CA:—–|DOCUMENTARY|———————————</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse16"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            caDocum.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.accordionBtn}`}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse17"
                      aria-expanded="false"
                      aria-controls="flush-collapse17"
                    >
                      <strong>PL:——|DOCUMENTARY|——————————–</strong>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse17"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      
                          <ul className="mt-1">
                            {
                            plDocum.map((x)=>(
                            <li key={x} className="mt-2">
                              {x}
                            </li> 
                            ))}
                          
                          </ul>
                    </div>
                  </div>
                </div>


              </div>

              




          </section>
          
          

        </div>
      
    </>
  )
}

export default Channels
