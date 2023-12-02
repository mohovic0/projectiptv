import React from 'react'
import Head from 'next/head'
import styles from '@/pages/channels/Channels.module.css'
import Image from 'next/image'

function Channels() {
    const useGenaral = [
        'cozi channel',
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

    const plCinema =[
    'PL001:13 Ulica FHD',
    'PL002:Ale Kino FHD',
    'PL006:AXN Black HD',
    'PL007:AXN HD',
    'PL008:AXN SPIN HD',
    'PL009:AXN White HD',
    'PL015:CANAL FAMILY FHD',
    'PL016:CANAL FHD',
    'PL017:CANAL FILM FHD',
    'PL018:Canal Seriale FHD',
    'PL022:CBS ACTION',
    'PL025:CINEMAX 2 HD',
    'PL026:CINEMAX HD',
    'PL040:Epic Drama',
    'PL050:Fightbox FHD',
    'PL051:FILMBOX ACTION HD',
    'PL052:Filmbox Arthouse',
    'PL053:Filmbox Extra FHD',
    'PL054:FILMBOX FAMILY FHD',
    'PL055:FILMBOX PREMIUM HD',
    'PL057:FOX Comedy FHD',
    'PL058:FOX FHD',
    'PL062:HBO 2 FHD',
    'PL063:HBO 3 FHD',
    'PL064:HBO HD',
    'PL113:Stop klatka TV',
    'PL118:TNT FHD',
    'PL124:TV Puls FHD',
    'PL132:TVP 1 FHD',
    'PL134:TVP 3 HD',
    'PL143:Canal 1',
    'PL149:13 Ulica HD',
    'PL154:Ale Kino HD',
    'PL155:AMC',
    'PL156:ATM Rozrywka',
    'PL157:AXN SPIN HD',
    'PL160:CBS Action',
    'PL163:Cinemax 2 HD',
    'PL177:Filmbox Arthouse',
    'PL179:FOX HD',
    'PL193:Paramount Channel HD',
    ]

    const plNews=['PL083:wPolsce.pl',
    'PL096:Polsat News HD',
    'PL102:Polsat Sport News HD',
    'PL114:TVN 24 Bis',
    'PL119:Polsat News 2',
    'PL125:TV Republika HD',
    'PL127:TVN 24 FHD',
    'PL137:TVP Info FHD',
    ]

    const plKids =['PL014:Boomerang HD',
    'PL021:CARTOON NETWORK HD',
    'PL028:Da Vinci Learning',
    'PL036:Da Vinci',
    'PL037:Disney XD',
    'PL038:DOMO FHD',
    'PL059:Polsat Cafe',
    'PL072:MiniMini HD',
    'PL093:Polsat Jim Jam',
    'PL116:Teletoon HD',
    'PL135:TVP abc HD',
    'PL146:BBC CBeebies',
    'PL159:Cartoon Network HD',
    'PL165:Da Vinci Learning',
    'PL169:Disney Junior',
    'PL170:Disney XD',
    'PL188:MiniMini HD',
    'PL204:Puls 2',
    ]

    const plSport = ['PL010:Canal+ Sport FHD',
    'PL019:CANAL SPORT 2 FHD',
    'PL020:CANAL SPORT FHD',
    'PL041:ELEVEN SPORTS 2 HD',
    'PL042:Eleven Sports 3',
    'PL043:ELEVEN SPORTS 4 FHD',
    'PL044:Polsat Sport Premium 2 HD',
    'PL045:Polsat Sport Premium 1 HD',
    'PL047:EUROSPORT 1HD',
    'PL048:EUROSPORT 2HD',
    'PL060:KSW PPV HD',
    'PL076:Canal + Sport 2 FHD',
    'PL085:NSport Plus HD',
    'PL099:Polsat Sport Extra FHD',
    'PL100:POLSAT Sport Fight FHD',
    'PL101:Polsat Sport HD',
    'PL111:Sport klub HD',
    'PL112:Sport Klub Polska FHD',
    'PL142:TVP Sport FHD',
    'PL172:Eleven Sports 1 HD',
    'PL173:Eleven Sports 2 FHD',
    'PL174:Eleven Sports 3 FHD',
    'PL175:Eleven Sports 4 HD',
    'PL180:Golf Channel HD',
    'PL199:Polsat Sport Fight HD',
    ]

    const plEnter = ['PL003:4Fun TV',
    'PL005:ATM ROZRYWKA TV',
    'PL012:BBC FIRST',
    'PL013:Chillizet',
    'PL023:CBS EUROPA HD',
    'PL024:CBS REALITY HD',
    'PL027:Comedy Central FHD',
    'PL029:DISCO POLO MUSIC',
    'PL039:E! FHD',
    'PL046:ID',
    'PL049:NC+ PR',
    'PL065:HGTV FHD',
    'PL067:Romance TV',
    'PL068:KINO TV FHD',
    'PL069:Kuchnia HD',
    'PL070:Lifetime HD',
    'PL071:METRO',
    'PL073:MOTOR WIZJA',
    'PL074:STARS TV',
    'PL075:Red Carpet TV',
    'PL077:TVS',
    'PL082:VOX MUSIC TV',
    'PL084:NOWA TV HD',
    'PL087:Planete FHD',
    'PL088:Polo TV HD',
    'PL089:POLSAT 2 FHD',
    'PL090:POLSAT CAFE',
    'PL091:Polsat Doku HD',
    'PL092:Polsat FHD',
    'PL094:Polsat Music HD',
    'PL095:Superstacja',
    'PL097:Polsat Play FHD',
    'PL098:POLSAT ROMANS',
    'PL103:TVN Siedem',
    'PL104:Canal+ HD',
    'PL108:POWER TV',
    'PL110:Sci-Fi HD',
    'PL115:SUPER POLSAT',
    'PL120:Polsat Rodzina',
    'PL121:TTV FHD',
    'PL122:E! Entertainment',
    'PL123:TV6',
    'PL126:TVN 7 FHD',
    'PL128:TVN Fabula FHD',
    'PL129:TVN FHD',
    'PL130:TVN Style FHD',
    'PL133:TVP 2 FHD',
    'PL138:TVP KULTURA HD',
    'PL139:TVP Polonia HD',
    'PL140:TVP ROZRYWKA',
    'PL141:TVP SERIALE',
    'PL144:VH1',
    'PL145:BBC BRIT',
    'PL150:4Fun Dance',
    'PL151:4Fun Gold Hits',
    'PL152:BBC LifeStyle',
    'PL161:CBS Europa HD',
    'PL162:CBS Reality',
    'PL164:Comedy Central Family',
    'PL166:Disco Polo Music',
    'PL176:ESKA TV Extra',
    'PL182:HIP HOP TV',
    'PL183:KINO POLSKA',
    'PL184:Kino Polska Muzyka',
    'PL185:Kino Tv',
    'PL186:Lifetime HD',
    'PL187:Metro',
    'PL189:MTV Dance HD',
    'PL190:MTV Polska HD',
    'PL192:NOWA TV',
    'PL194:Planete HD',
    'PL195:Polo TV',
    'PL196:Polsat Doku FHD',
    'PL197:Polsat Music FHD',
    'PL198:POLSAT ROMANS HD',
    'PL203:Power TV',
    ]

    const alEnter = ['AL017:RTV 21 Popullore',
    'AL018:RTV 21 Mix HD',
    'AL019:RTV 21 Maqedonia',
    'AL020:RTV 21 Junior',
    'AL022:Rrokum TV',
    'AL023:RTK 2 HD AL',
    'AL024:PLUS HD(Digitalb)',
    'AL025:Plus HD',
    'AL026:RTK 3 HD AL',
    'AL028:RTK 4 HD AL',
    'AL031:Klan Kosova Toksor',
    'AL034:RTV 21 HD',
    'AL038:RTV 21 MIX HD',
    'AL039:RTV 21 PLUS HD',
    'AL042:RTV 21 POPULLORE',
    'AL045:JUG TV',
    'AL046:First TV',
    'AL048:RTV 21 MK HD',
    'AL049:KTV HD',
    'AL056:ALB UK HD',
    'AL057:ALB UK',
    'AL067:Tring Shqip',
    'AL083:RTV 21',
    'AL084:RTK',
    'AL087:RTSH 1 HD',
    'AL088:KTV HD',
    'AL090:RTSH 2',
    'AL091:Humor 1',
    'AL098:RTSH 3 HD',
    'AL103:X Humor HD',
    'AL105:24 KITCHEN HD',
    'AL106:A-Mol TV',
    'AL112:RTSH MUZIKE HD',
    'AL113:Alb Folk1 HD',
    'AL115:ALB Hits HD',
    'AL116:Alb Horror HD',
    'AL117:Alb Thriller',
    'AL118:RTSH Shqip HD',
    'AL119:Alb Islam',
    'AL121:ALB MUSIC HD',
    'AL122:Alb Swiss HD',
    'AL123:ALB WESTERN HD',
    'AL125:ALBUK HD',
    'AL126:Alsat M',
    'AL129:Apollon TV',
    'AL140:BBF MUSIC TV',
    'AL141:Besa TV',
    'AL147:Channel One FHD',
    'AL152:Family HD',
    'AL154:DTV HD',
    'AL156:Elrodi TV HD',
    'AL157:English Club TV',
    'AL158:Era TV HD',
    'AL159:Euro AL',
    'AL165:FAST BOX & FUN',
    'AL168:TDC',
    'AL177:X Cifteli HD',
    'AL182:FIRST Burimi TV',
    'AL183:First Channel HD',
    'AL184:FOLK HD',
    'AL185:Folk lorit',
    'AL190:X Premium 4 HD',
    'AL196:IN TV',
    'AL198:Jolly FHD',
    'AL199:Junior TV',
    'AL223:Tring Histori HD',
    'AL230:RTV 21 HD Popullore',
    'AL234:TV Chicago',
    'AL235:Djing Hits',
    'AL236:Turbo Channel HD',
    'AL237:WesterN',
    'AL238:Folklorit',
    'AL239:VH1 Classic',
    'AL240:ShqipTV MIMI',
    'AL242:RTV 21 NewsBIZ HD',
    'AL244:Shota TV 4K UHD',
    'AL245:MRT 2',
    'AL246:MFM Music',
    'AL247:Music TV',
    'AL248:My Music',
    'AL252:Lugina Popullore',
    'AL253:Novela',
    'AL254:ON TV',
    'AL256:X Popullore HD',
    'AL259:X Romance HD',
    'AL260:X Gold HD',
    'AL262:Report TV',
    'AL263:RROKUM TV HD',
    'AL264:RTK 1 HD',
    'AL265:RTK 2 HD',
    'AL266:Rtk 3 HD',
    'AL267:Rtk 4 HD',
    'AL269:RTSH 1 HD',
    'AL270:RTSH 2 HD',
    'AL271:RTSH 3 HD',
    'AL280:RTV 21',
    'AL281:RTV 21 Junior',
    'AL282:RTV 21 Mix HD',
    'AL284:RTV Plus HD',
    'AL285:RTV 21 Popullore FHD',
    'AL286:RTV Bujanovc HD',
    'AL287:RTV Islam',
    'AL288:RTV Pendimi HD TV',
    'AL289:RTV Presheva HD',
    'AL290:Rtv Zeri Danimarke',
    'AL292:RTSH GJIROKASTRA',
    'AL293:ShaqipTV WESTERN HD',
    'AL294:ShqipTV Hindi HD',
    'AL295:TV Tetova HD',
    'AL296:ShqipTV Cinema HD',
    'AL297:ShqipTV Humor HD',
    'AL298:ShqipTV Stupcat HD',
    'AL299:ShqipTV Comedy HD',
    'AL313:Sole TV',
    'AL314:Spin TV',
    'AL315:TV Shenja HD',
    'AL319:Stinet HD',
    'AL329:Syri Blue HD',
    'AL330:Syri Vision',
    'AL336:TNT',
    'AL341:Tribuna Channel',
    'AL343:Tring Jolly FHD',
    'AL344:Tring Life HD',
    'AL346:TV Opoja',
    'AL359:TV 2',
    'AL362:TV Diaspora',
    'AL363:TV Dielli HD',
    'AL364:TV Dukagjini HD',
    'AL365:TV Koha HD',
    'AL366:TV Liria',
    ]

    const alSport = ['AL001:Super Sport 4 HD',
    'AL002:Super Sport 3 HD',
    'AL003:Super Sport 2 HD',
    'AL004:Super Sport 1 HD',
    'AL012:Tring Sport 2 HD',
    'AL021:RTSH Sport HD',
    'AL065:TRING SPORT 4 HD',
    'AL066:TRING SPORT 1 HD',
    'AL078:SuperSport 5',
    'AL079:SuperSport 4',
    'AL080:SuperSport 3',
    'AL082:Super Sport Kosovo 1 HD',
    'AL101:ALB Hindi',
    'AL114:ALB HINDI HD',
    'AL120:RTSH Sports HD',
    'AL131:RROKUM TV HD',
    'AL160:EUROSPORT 1 HD',
    'AL161:EUROSPORT 2 HD',
    'AL200:K Sport 1 HD',
    'AL201:K Sport 2 HD',
    'AL203:K Sport 4 HD',
    'AL219:Tring Sport 1 HD',
    'AL220:Tring Sport 2 HD',
    'AL221:Tring Sport 3 HD',
    'AL222:TRING SPORT 4 HD',
    'AL279:RTSH Sport HD',
    'AL321:Super Sport 2 HD',
    'AL322:Super Sport 3 HD',
    'AL323:Super Sport 4 FHD',
    'AL324:Super Sport 5 FHD',
    'AL325:Super Sport 6 FHD',
    'AL327:Super Sport Kosova 2 FHD',
    'AL351:Tring Sport 2 FHD',
    'AL353:Tring Sport 4 HD',
    'AL369:Tring Sport 3',
    ]

    const alCinema = ['AL005:Sky Komedi',
    'AL006:Sky Histori',
    'AL007:Sky AL Max',
    'AL008:Zjarr TV',
    'AL009:Vizion Plus Toksor',
    'AL010:Vizion Plus HD',
    'AL014:Sky Shkence',
    'AL015:Sky Comedy',
    'AL016:Sky Aksion',
    'AL030:KLAN Plus',
    'AL036:Kino ROMANCE HD',
    'AL037:Kino Premiere 3 HD',
    'AL040:Kino Family HD',
    'AL041:Kino Dark HD',
    'AL043:Kino Action',
    'AL044:Junior TV',
    'AL047:Film Nje HD',
    'AL059:A1 SHQIPTARE',
    'AL061:WesterN',
    'AL064:TRING SUPER',
    'AL069:Tring Max',
    'AL070:Tring Life',
    'AL071:TRING KOMEDI',
    'AL073:TRING FANTASY',
    'AL074:Tring Comedy',
    'AL076:Thriller',
    'AL081:KLAN PLUS HD',
    'AL089:JOLLY HD',
    'AL094:FILM DY',
    'AL095:FILM DRAME',
    'AL097:DIGI GOLD',
    'AL100:BB11 Muzik',
    'AL102:Action',
    'AL108:RTSH KORCA HD',
    'AL109:Aksion HD',
    'AL111:Alb Action HD',
    'AL124:RTSH FILM HD',
    'AL128:VISION PLUS HD',
    'AL133:Film Një HD',
    'AL134:Zjarr TV',
    'AL135:Film Dy HD',
    'AL136:VISION PLUS HD',
    'AL139:BB11 Muzik',
    'AL142:Film Hits HD',
    'AL143:Film Autor HD',
    'AL144:Film Drame HD',
    'AL145:Film Thriller HD',
    'AL146:Film Comedi HD',
    'AL148:Film Aksion HD',
    'AL149:X Western HD',
    'AL166:FILM AKSION HD',
    'AL167:Film Autor',
    'AL169:Film Drame',
    'AL170:Film Dy HD',
    'AL171:Film Family HD',
    'AL172:Film Gold 1 HD',
    'AL173:FILM Gold 3 HD',
    'AL174:Film Gold 4 HD',
    'AL175:Film Hits HD',
    'AL176:Film Komedi',
    'AL178:Film Nje HD',
    'AL179:FILM Stinet HD',
    'AL180:Film Thriller HD',
    'AL181:Filmi Umeri',
    'AL186:FOX CRIME HD',
    'AL187:FOX HD',
    'AL188:FOX LIFE',
    'AL191:HBO 2',
    'AL192:HBO 3',
    'AL214:Klan Plus HD',
    'AL215:X Premium 2 HD',
    'AL216:KS COMEDY',
    'AL217:KS EPIC HD',
    'AL218:KS FESTA HD',
    'AL224:X Thriller HD',
    'AL229:Rtsh Muzike',
    'AL231:Shqip Fantazi',
    'AL232:Shqip Qifteli',
    'AL233:Histori HD',
    'AL258:TRING KOMEDI',
    'AL273:RTSH FILM HD',
    'AL274:RTSH Femije TV',
    'AL277:Rtsh Muzike HD',
    'AL278:RTSH Shqip HD',
    'AL305:SKy AKSION HD',
    'AL308:Sky Max',
    'AL309:Sky Shkence',
    'AL311:SKY PLANET',
    'AL334:Tema TV',
    'AL335:Tip TV',
    'AL342:Tring 3 HD',
    'AL347:Tring Planet HD',
    'AL348:TRING SHQIP HD',
    'AL349:Tring Smile',
    'AL355:Tring Super FHD',    
    ]

    const alDocum = ['AL011:X Shkenca HD',
    'AL029:Living HD',
    'AL035:Kino Scifi HD',
    'AL052:Explorer Shkenc',
    'AL053:Explorer Natyra',
    'AL054:Explorer Histori',
    'AL062:Tring World',
    'AL068:Tring Planet',
    'AL072:TRING HISTORI',
    'AL096:EXP HISTORI',
    'AL127:ANIMAL PLANET HD',
    'AL162:Explorer History',
    'AL163:Explorer Natyra',
    'AL164:Explorer Shkence HD',
    'AL193:History Channel',
    'AL243:Living HD',
    'AL249:NAT GEO HD',
    'AL250:NAT GEO WILD HD',
    'AL352:X Natyra HD',
    'AL357:Tring World HD',
    ]

    const alNews = ['AL013:RTK 1 HD AL',
    'AL027:News 24',
    'AL032:KLAN Kosova HD',
    'AL033:KLAN HD',
    'AL058:ABC News',
    'AL060:Top News',
    'AL075:Top Channel HD',
    'AL077:KLAN KOSOVA HD',
    'AL085:Ora News(1)',
    'AL086:News 24(1)',
    'AL099:RTSH 24 HD',
    'AL104:RTSH Plus HD',
    'AL107:ABC News HD',
    'AL110:Al Report',
    'AL130:ERA TV HD',
    'AL132:T7 HD',
    'AL137:Arta News HD',
    'AL155:Dukagjini HD',
    'AL189:FOX News',
    'AL194:Medina TV',
    'AL195:Igman Tv Islam',
    'AL211:Klan HD',
    'AL212:KLAN KOSOVA HD',
    'AL225:Alb Islam',
    'AL241:Uskana TV',
    'AL251:News 24 HD',
    'AL255:ORA News HD',
    'AL257:Peace TV',
    'AL261:Quran TV',
    'AL272:RTSH 24 HD',
    'AL291:A2 CNN',
    'AL318:Kanali 7 News',
    'AL338:Top Channel HD',
    'AL368:TV Mitrovica',
    ]

    const alKids = ['AL055:Cufo',
    'AL063:TRING TRING',
    'AL138:Bang Bang HD',
    'AL150:Club TV',
    'AL151:Cufo HD',
    'AL153:Disney Channel HD',
    'AL197:Jim Jam',
    'AL226:Tring Kids',
    'AL227:KS KIDS',
    'AL228:KS BABY FIRST',
    'AL356:Tring Tring HD',
    ]

    const nlGeneral = ['NL043:NPO 1',
    'NL007:NPO 1 HD',
    'NL042:NPO 2',
    'NL006:NPO 2 FHD 1080',
    'NL041:NPO 3',
    'NL005:NPO 3 FHD 1080',
    'NL035:SBS 6',
    'NL161:SBS 6 FHD',
    'NL040:RTL 4',
    'NL149:RTL 4 HD',
    'NL039:RTL 5',
    'NL150:RTL 5 HD',
    'NL038:RTL 7',
    'NL151:RTL 7 HD',
    'NL037:RTL 8',
    'NL004:SBS 9',
    'NL162:SBS 9 HD',
    'NL021:Net 5 FHD 1080',
    'NL054:FOX Channel',
    'NL033:TLC',
    'NL034:SYFY',
    'NL044:Slam',
    'NL047:NET 5',
    'NL060:RTV 7',
    'NL062:Comedy Central',
    'NL065:13th',
    'NL066:100%NL',
    'NL067:13th Street',
    'NL068:192 TV',
    'NL069:24 Kitchen HD',
    'NL070:RTV 538',
    'NL072:AT5',
    'NL074:TVOost',
    'NL075:BBC Entertainment',
    'NL078:Comedy Central Extra',
    'NL079:Comedy Central HD',
    'NL080:Crime & Investigation HD',
    'NL087:Djazz TV',
    'NL088:TVNoord',
    'NL092:Penthouse',
    'NL093:Net 5',
    'NL094:Ziggo TV',
    'NL097:Omroep Flevoland',
    'NL098:Food Network FHD',
    'NL099:Fox Channel HD',
    'NL112:GO-RTV',
    'NL113:ZFM',
    'NL114:DEN HAAG TV',
    'NL117:MTV',
    'NL120:Omroep Ede',
    'NL123:L1mburg',
    'NL124:Mezzo',
    'NL128:MTV Brand New',
    'NL129:Mtv Music',
    'NL130:MTV Music 24',
    'NL133:NET 5 HD',
    'NL135:Nick Music HD',
    'NL138:NPO 1 HD',
    'NL139:NPO 2 HD',
    'NL140:Npo Nieuws',
    'NL141:NPO Politiek',
    'NL142:NPO Zapp Xtra',
    'NL143:OMROEP BRABANT HD',
    'NL144:OMROEP Frysl鈔',
    'NL145:OMROEP West',
    'NL146:OMROEP ZeeLand HD',
    'NL147:ONS',
    'NL156:RTV Drenthe HD',
    'NL157:RTV Noord',
    'NL158:RTV OOST',
    'NL159:RTV Rijnmond',
    'NL160:RTV Utrecht',
    'NL163:Shorts TV FHD',
    'NL164:Spike HD',
    'NL166:TLC HD',
    'NL168:TV Oranje',
    'NL169:VH1 CLASSIC',
    'NL171:XITE HD',
    'NL172:ZDF HD',
    'NL173:Ziggo Extra 2',
    'NL174:Ziggo Select',
    ]

    const nlSport = ['NL001:Ziggo Sport Select FHD 1080',
    'NL003:Sport 1 Voetbal',
    'NL008:Fox Sports 6',
    'NL009:Fox Sports 5',
    'NL010:Fox Sports 4',
    'NL011:Fox Sports 3',
    'NL012:Fox Sports 2',
    'NL013:Fox Sports 1',
    'NL014:Eurosport 1 FHD 1080',
    'NL015:Eurosport 2 HD',
    'NL017:FOX Sports 1 FHD 1080',
    'NL018:FOX Sports 2 HD',
    'NL023:Fox Sports 4 HD ( 1080P )',
    'NL024:Fox Sports 5 HD ( 1080P )',
    'NL025:FOX Sports 3 HD ( 1080P )',
    'NL026:Ziggo Sport.Voetbal',
    'NL027:Ziggo Sport Select HD',
    'NL028:Ziggo Sport Racing',
    'NL029:Ziggo Sport Golf',
    'NL030:Ziggo Sport Extra2',
    'NL031:Ziggo Sport Extra1',
    'NL089:EUROSPORT 1 FHD',
    'NL090:EUROSPORT 2 HD',
    'NL091:Extreme Sports Channel',
    'NL100:FOX SPORTS 1 EREDIVISIE HD',
    'NL101:FOX SPORTS 1 HD',
    'NL102:FOX SPORTS 2 HD',
    'NL103:FOX SPORTS 2 INTERNATIONAL',
    'NL104:FOX SPORTS 3 EREDIVISIE',
    'NL105:FOX SPORTS 3 HD',
    'NL106:FOX SPORTS 4 HD',
    'NL107:FOX SPORTS 4 INTERNATIONAL',
    'NL108:FOX SPORTS 5 EREDIVISIE HD',
    'NL109:FOX SPORTS 5 HD',
    'NL110:FOX SPORTS 6 HD',
    'NL111:FOX SPORTS 6 INTERNATIONAL',
    'NL115:Golf HD',
    'NL125:Motors TV',
    'NL126:Ziggo Sport Voetbal HD',
    'NL127:Ziggo Sport DOCU HD',
    'NL152:Ziggo Sport Racing HD',
    'NL165:Ziggo Sport GOLF HD',
    ]

    const nlMovie = ['NL016:Film1 Premiere FHD 1080',
    'NL036:RTL lounge',
    'NL051:HBO2',
    'NL052:HBO 3',
    'NL053:HBO',
    'NL055:Film1 SUNDANCE',
    'NL056:Film1 Spotlight',
    'NL057:Film1 Premiere',
    'NL058:Film1 Comedy & Kids',
    'NL059:Film1 Action',
    'NL095:Film 1 Sundance',
    'NL096:Film Action HD',
    'NL116:HBO 2 HD',
    'NL118:HBO HD',
    'NL153:RTL Crime HD',
    'NL154:RTL Lounge HD',
    'NL155:RTL Z HD',
    ]

    const nlKids = ['NL002:Veronica / Disney XD FHD 1080',
    'NL019:Ketnet HD',
    'NL022:Nicktoons',
    'NL032:Veronica Disney XD',
    'NL045:Nick Jr',
    'NL048:JimJam',
    'NL049:Nick Hits',
    'NL063:RTL Telekids',
    'NL073:BABY TV HD',
    'NL076:Boomerang HD',
    'NL077:Cartoon Network HD',
    'NL085:Disney Channel',
    'NL086:Disney XD HD',
    'NL121:JimJam',
    'NL122:Ketnet Junior',
    'NL134:Nick Junior',
    'NL136:Nick toons HD',
    'NL137:Nickelodeon HD',
    'NL148:Pebble TV HD',
    ]

    const nlDocum = ['NL020:National Geographic FHD 1080',
    'NL046:National Geographic',
    'NL050:History',
    'NL061:Discovery Channel',
    'NL064:Animal Planet',
    'NL071:ANIMAL PLANET HD',
    'NL081:Discovery Channel FHD',
    'NL082:Discovery Science FHD',
    'NL083:Discovery SHOWCASE FHD',
    'NL084:Discovery World HD',
    'NL119:History Chanel HD',
    'NL131:NAT GEO HD',
    'NL132:NAT GEO WILD HD',
    'NL167:TRAVEL CHANNEL HD',
    'NL170:Viceland FHD',
    ]

    const deNews = ['DE005:Anixe',
    'DE028:N24',
    'DE029:N TV',
    'DE067:Sky Sport News',
    'DE078:ZDF',
    'DE122:ARD',
    'DE124:Augsburg TV',
    'DE128:tagesschau24 HD ( 1080P )',
    'DE168:EURONEWS HD',
    'DE192:N24 News HD',
    'DE195:N-TV HD',
    'DE197:NTV HD',
    'DE198:OK DESSAU HD',
    'DE222:RNF HD',
    'DE287:SR TV mein HD d3',
    'DE289:ARD Tagesschau 24 HD',
    'DE295:ZDF NEO HD',
    ]

    const deDocum = ['DE004:Animal Planet',
    'DE013:Discovery DE',
    'DE021:History DE',
    'DE030:NAT GEO People',
    'DE031:NAT GEO Wild DE',
    'DE032:NAT GEO DE',
    'DE036:Phoenix',
    'DE037:ProSieben',
    'DE038:ProSieben MAXX',
    'DE107:National Geographic HD Germany',
    'DE110:VIVA',
    'DE148:Baden TV',
    'DE206:PLANET HD',
    'DE288:SWR BW HD',
    ]

    const deCinema = ['DE001:13TH Street',
    'DE002:3 SAT HD',
    'DE003:A&E DE',
    'DE008:AXN DE',
    'DE015:Disney cine magic',
    'DE020:Fox DE',
    'DE022:Kabel 1 Classic',
    'DE034:ORF 1',
    'DE035:ORF 2',
    'DE041:RTL Crime',
    'DE043:RTL Nitro',
    'DE045:SAT 1 Gold',
    'DE046:SAT 1',
    'DE047:Servus TV',
    'DE050:Sky Atlantic',
    'DE052:Sky Cinema',
    'DE053:Sky Cinema 1',
    'DE054:Sky Cinema 24',
    'DE055:Sky Cinema Action',
    'DE056:Sky Cinema Comedy',
    'DE059:Sky Cinema Emotion',
    'DE060:Sky Cinema Family',
    'DE061:Sky Cinema Hits',
    'DE057:Sky Disney',
    'DE058:Sky DMAX',
    'DE063:Sky Krimi',
    'DE062:Sky Cinema Nostalgie',
    'DE068:Universal DE',
    'DE072:Syfy DE',
    'DE073:TNT Comedy',
    'DE074:TNT Film',
    'DE075:TNT Series',
    'DE088:Sky Select 8',
    'DE089:Sky Select 7',
    'DE090:SKY SELECT 6',
    'DE091:SKY SELECT 5',
    'DE092:SKY SELECT 4',
    'DE093:SKY SELECT 3',
    'DE094:SKY SELECT 2',
    'DE095:SKY SELECT 1',
    'DE106:Pro7',
    'DE108:Disney Cinemagic HD',
    'DE123:SAT GOLD 1',
    'DE133:Sky Cinema Family',
    'DE153:CineDome 1 HD',
    'DE154:CineDome 2 HD',
    'DE155:CineDome 3 HD',
    'DE156:CineDome 4 HD',
    'DE157:CineDome 5 HD',
    'DE173:FILM CLUB 1 HD',
    'DE174:FILM CLUB 2 HD',
    'DE175:FILM CLUB 3 HD',
    'DE176:FILM CLUB 4 HD',
    'DE177:FILM CLUB 5 HD',
    'DE180:ORF 3 HD',
    'DE181:HEIMATKANAL HD',
    'DE189:KINO WELT TV HD',
    'DE207:POPCORN SELECT 1 FHD',
    'DE208:POPCORN SELECT 2 FHD',
    'DE209:POPCORN SELECT 3 FHD',
    'DE210:POPCORN SELECT 4 FHD',
    'DE211:POPCORN SELECT 5 HD',
    'DE212:POPCORN SELECT 6 HD',
    'DE213:POPCORN SELECT 7 HD',
    'DE229:Sky 1 HD',
    'DE232:Sky Cinema WESTERN',
    'DE235:Kinowelt TV F',
    'DE240:Sky Popcorn Select 1 HD',
    'DE241:Sky Popcorn Select 2 HD',
    'DE242:Sky Popcorn Select 5 HD',
    'DE243:SKY SELECT 1 HD',
    'DE244:SKY SELECT 2 HD',
    'DE245:SKY SELECT 3 HD',
    'DE246:SKY SELECT 4 HD',
    'DE247:SKY SELECT 5 HD',
    'DE248:SKY SELECT 6 HD',
    'DE249:SKY SELECT 7 HD',
    'DE250:SKY SELECT 8 HD',
    'DE251:SKY SELECT 9 HD',
    'DE252:Sky Select 10 HD',
    'DE253:Sky Select 11 HD',
    'DE254:Sky Select 12 HD',
    'DE255:SKY SELECT 13 HD',
    'DE256:SKY SELECT 14 HD',
    'DE257:SKY SELECT 15 HD',
    'DE258:SKY SELECT 16 HD',
    'DE259:SKY SELECT 17 HD',
    'DE260:SKY SELECT HD',
    'DE280:SKY STORE 1 POPCORN',
    'DE281:Sky STORE 2 POPCORN',
    'DE282:Sky STORE 3 POPCORN',
    'DE283:SKY STORE 5 POPCORN',
    'DE285:Sony Tv HD',
    ]

    const deKids = ['DE009:Boomerang DE',
    'DE010:Cartoon Network DE',
    'DE014:Disney DE',
    'DE016:Disney JR DE',
    'DE017:Disney XD DE',
    'DE025:Kika',
    'DE033:Nickelodeon DE',
    'DE071:Super RTL',
    'DE147:Baby TV',
    'DE164:VIVA/COMEDY CENTRAL',
    'DE185:Junior HD',
    'DE196:Nick HD',
    'DE227:Toggo Plus',
    ]

    const deSport = ['DE018:Euro Sport 1 DE',
    'DE019:Euro Sport 2 DE',
    'DE051:Sky Bundesliga 1',
    'DE064:Sky Sport 1',
    'DE065:Sky Sport 2',
    'DE066:Sky Sport Austria',
    'DE069:Sport 1',
    'DE070:Sport Digital',
    'DE079:Sky Sport 9 HD ( During Games only )',
    'DE080:Sky Sport 8 HD ( During Games only )',
    'DE081:Sky Sport 7 HD ( During Games only )',
    'DE082:Sky Sport 6 HD ( During Games only )',
    'DE083:Sky Sport 5 HD ( During Games only )',
    'DE084:Sky Sport 4 HD ( During Games only )',
    'DE085:Sky Sport 3 HD ( During Games only )',
    'DE086:Sky Sport 11 HD ( During Games only )',
    'DE087:Sky Sport 10 HD ( During Games only )',
    'DE096:Sky BUNDESLIGA 9 HD ( During Games only )',
    'DE097:Sky BUNDESLIGA 8 HD ( During Games only )',
    'DE098:Sky BUNDESLIGA 7 HD ( During Games only )',
    'DE099:Sky BUNDESLIGA 6 HD ( During Games only )',
    'DE100:Sky BUNDESLIGA 5 HD ( During Games only )',
    'DE101:Sky BUNDESLIGA 4 HD ( During Games only )',
    'DE102:Sky BUNDESLIGA 3 HD ( During Games only )',
    'DE103:SKY BUNDESLIGA 2 HD ( During Games only )',
    'DE104:Sky BUNDESLIGA 10 HD ( During Games only )',
    'DE112:Sport 1 HD',
    'DE126:SPORT1 HD ( 1080P )',
    'DE127:SR Fernsehen HD ( 1080P )',
    'DE132:Motorvision TV',
    'DE135:Eurosport 1 HD',
    'DE136:Sky Germany Sport 3 HD',
    'DE137:Sky Germany Sport 9 HD',
    'DE138:Sky Germany Sport 8 HD',
    'DE139:Sky Germany Sport 7 HD',
    'DE140:Sky Germany Sport 6 HD',
    'DE141:Sky Germany Sport 5 HD',
    'DE142:Sky Germany Sport 4 HD',
    'DE143:Sky Germany Sport 11 HD',
    'DE144:Sky Germany Sport 10 HD',
    'DE146:Auto Motor Sport HD',
    'DE149:BAYERN FC TV',
    'DE161:DAZN BAR 1 HD',
    'DE162:DAZN BAR 2 HD',
    'DE169:EUROSPORT 1 HD',
    'DE170:EUROSPORT 2 HD',
    'DE171:Eurosport 2 Xtra',
    'DE172:TV Oberpfalz',
    'DE182:HR Fernsehen HD',
    'DE183:Telekom Sport 2',
    'DE191:Motorvision HD',
    'DE204:OLYMPIC CHANNEL SPORT 2 HD',
    'DE218:RAN 1 HD',
    'DE228:Telekom Fussball 1 HD',
    'DE230:DAZN 2 Bar',
    'DE231:Telekom Fussball 2 HD',
    'DE234:Sky EUROSPORT 1 HD',
    'DE236:Telekom Fussball 3 HD',
    'DE237:Telekom Fussball 4 HD',
    'DE239:Telekom Fussball 5 HD',
    'DE261:Sky Sport 3 HD',
    'DE262:Sky Sport 4 HD',
    'DE263:Sky Sport 5 HD',
    'DE264:Sky Sport 6 HD',
    'DE265:Sky Sport 7 HD',
    'DE266:Sky Sport 8 HD',
    'DE267:Sky Sport 9 HD',
    'DE268:Sky Sport 10 HD',
    'DE269:Sky Sport Bundesliga 1 HD',
    'DE270:Sky Sport Bundesliga 2 HD',
    'DE271:Sky Sport Bundesliga 3 HD',
    'DE272:Sky Sport Bundesliga 4 HD',
    'DE273:Sky Sport Bundesliga 5 HD',
    'DE274:Sky Sport Bundesliga 6 HD',
    'DE275:Sky Sport Bundesliga 7 HD',
    'DE276:Sky Sport Bundesliga 8 HD',
    'DE277:Sky Sport Bundesliga 9 HD',
    'DE278:Sky Sport Bundesliga 10 HD',
    'DE279:Sky Sport HD (AU)',
    'DE290:DAZN 1',
    'DE291:BBL Sport 1 (ONLY ON MATCHDAY)',
    'DE292:BBL Sport 2 (ONLY ON MATCHDAY)',
    'DE293:BBL Sport 3 (ONLY ON MATCHDAY)',
    'DE294:BBL Sport 4 (ONLY ON MATCHDAY)',
    ]

    const deEnter = ['DE006:Ard Alpha',
    'DE158:Classica HD',
    'DE284:SONNE NKLAR HD',
    'DE007:Arte',
    'DE011:Das Erste',
    'DE012:Deluxe Music',
    'DE023:Kabel 1 Doku',
    'DE024:Kabel 1 Eins',
    'DE026:MGM',
    'DE027:MTV DE',
    'DE039:RTL 1',
    'DE040:RTL 2',
    'DE042:RTL Living',
    'DE044:RTL Passion',
    'DE048:Sixx',
    'DE049:Sky Arts',
    'DE076:VOX',
    'DE077:WDR',
    'DE105:RTL HD',
    'DE109:Classica',
    'DE111:ZEE ONE',
    'DE113:Pro7 Fun HD',
    'DE114:RTL Plus',
    'DE115:Hr-fernsehen HD',
    'DE116:MDR S-Anhalt HD ( 1080P )',
    'DE117:MDR Sachsen HD ( 1080P )',
    'DE118:MDR Thüringen HD ( 1080P )',
    'DE119:QVC BEAUTY & STYLE HD ( 1080P )',
    'DE120:Rbb Berlin HD ( 1080P )',
    'DE121:rbb Brandenburg HD ( 1080P )',
    'DE125:SPIEGEL TV Wissen HD',
    'DE129:TLC HD ( 1080P )',
    'DE130:Zee One HD ( 1080P )',
    'DE131:E! Entertainm HD ( 1080P )',
    'DE134:RTL HD',
    'DE145:Munchen TV',
    'DE150:BLK TV',
    'DE151:BR FERNSEHEN HD',
    'DE152:ZDF INFO HD',
    'DE159:XITE HD',
    'DE160:Chemnitz TV',
    'DE163:Deutsches Musik Fernsehen HD',
    'DE165:DRF 1 HD',
    'DE166:E! ENTERTAINM HD',
    'DE167:ELBEKANAL HD',
    'DE178:FIX and FOXI',
    'DE179:Friesischer Rundfunk HD',
    'DE184:Jukebox HD',
    'DE186:Dresden TV',
    'DE187:Tele 5',
    'DE188:Kabel Doku',
    'DE190:MDR HD',
    'DE193:NDR HD',
    'DE194:NITRO HD',
    'DE199:OK MAGDEBURG REGGIO TV FHD',
    'DE200:OK MERSEBURG HD',
    'DE201:OK Wernigerode',
    'DE202:OKTO TV',
    'DE203:Oldenburg eins TV HD',
    'DE205:ONE HD',
    'DE214:Pro 7 HD',
    'DE215:PRO 7 MAXX FHD',
    'DE216:Deluxe Music HD',
    'DE217:QVC HD',
    'DE219:rbb HD',
    'DE220:RFH HD',
    'DE221:RIC HD',
    'DE223:Romance TV HD',
    'DE224:RTL II HD',
    'DE225:RTL FHD',
    'DE226:RTL Nitro HD',
    'DE233:Sky Classica',
    'DE238:TLC HD',
    'DE286:Spiegel TV Wissen HD',
    ]

    const ptGeneral = ['PT002:A Bola TV',
    'PT003:Afro Music',
    'PT005:ARTV',
    'PT015:Canal Panda',
    'PT017:Casa E Pesca',
    'PT018:CBS Reality',
    'PT024:E! Entertainment',
    'PT028:Fox Comedy',
    'PT029:Fox Crime',
    'PT030:Fox',
    'PT031:Fox Life',
    'PT033:Fuel TV',
    'PT034:Globo',
    'PT043:MTV Portuga',
    'PT049:PFC',
    'PT050:Porto Canal',
    'PT051:RTP 1',
    'PT052:RTP 2',
    'PT053:RTP 3',
    'PT054:Sic',
    'PT055:SIC Mulher',
    'PT056:SIC Noticias',
    'PT057:SIC Radical',
    'PT065:SYFY',
    'PT066:TLC',
    'PT068:Travel Channel',
    'PT073:TV Galicia',
    'PT077:TVI',
    'PT078:TVI 24',
    'PT079:VH1',
    'PT080:VH1 Classic',
    'PT081:TVI REALITY',
    'PT082:TVC HD',
    'PT083:My Cuisine',
    'PT084:TVI Reality HD',
    'PT085:RTP MEMóRIA',
    'PT086:RTP áFRICA',
    'PT087:RTP A?ORES',
    'PT088:GINX',
    'PT089:NICKELODEON',
    'PT094:CM TV',
    'PT095:CCTV 4',
    'PT096:CANAL Q',
    'PT097:24 KITCHEN',
    'PT098:RTP MADEIRA',
    'PT101:TPA',
    'PT102:DOG TV',
    'PT103:CACAVISION',
    'PT104:EuroNews',
    'PT105:REDE TV',
    'PT106:Blaze',
    'PT108:CACA E PESCA',
    'PT109:TVI FICCAO HD',
    'PT110:MCM POP',
    'PT111:Trace Urban',
    'PT112:MCM TOP',
    'PT115:TVC 2',
    'PT118:ClubbingTV',
    'PT123:Eleven Sports 6 FHD',
    'PT125:SKY News',
    'PT126:EURONEWS',
    'PT127:FIGHT NETWORH',
    'PT128:FINE LIVING',
    'PT129:RTP INTERNACIONAL',
    'PT130:SET MAX',
    'PT131:TraceTV',
    'PT132:Globo Now HD',
    'PT133:Arte',
    'PT135:MVM',
    'PT136:AlJazeera',
    'PT137:Trace TOCA',
    'PT138:MEZZO HD',
    'PT139:MTV HD',
    'PT140:ZAP VIVA HD',
    'PT142:Localvisao',
    'PT143:Globovision',
    'PT144:PFC INTERNACIONAL',
    'PT145:PANDA HD',
    'PT146:CANAL 11',
    'PT147:Real Madrid TV',
    'PT148:Record News',
    'PT150:AFRO MUSIC CHANNEL',
    'PT151:RTP Memoria',
    'PT152:TV FATIMA',
    'PT153:SIC CARAS FHD',
    'PT155:TVC 4 FHD',
    ]

    const ptMovie = ['PT004:AMC',
    'PT006:AXN',
    'PT007:AXN Black',
    'PT008:AXN White',
    'PT019:Cine Mundo',
    'PT032:Fox Movies',
    'PT036:Hollywood',
    'PT038:MCS Extreme',
    'PT039:MOV',
    'PT069:TV Cine 1',
    'PT070:TV Cine 2',
    'PT071:TV Cine 3',
    'PT072:TV Cine 4',
    'PT074:TV Globo Premium',
    'PT076:TVC Series',
    'PT091:MCS Lifestyle HD',
    'PT092:NOS Studios',
    ]

    const ptDoum = ['PT001:A&E',
    'PT014:Canal Historia',
    'PT020:Discovery Channel',
    'PT021:Discovery Showcase',
    'PT035:Historia',
    'PT044:NAT GEO Wild',
    'PT045:NAT GEO',
    'PT047:Odisseia',
    'PT075:TV Record',
    'PT090:NATIONAL GEOGRAPHIC',
    'PT113:CMTV FHD',
    'PT116:Crime & Investigation',
    'PT117:DISCOVERY CHANNEL',
    ]

    const ptSport = ['PT011:Benfica TV 1',
    'PT012:Benfica TV 2',
    'PT013:BTV',
    'PT025:Euro Sport 1',
    'PT026:Euro Sport 2',
    'PT027:Euro Sport News',
    'PT040:Motors TV',
    'PT041:Motor Vision',
    'PT042:Kombat Sports',
    'PT058:Sport TV 1',
    'PT059:Sport TV 2',
    'PT060:Sport TV 3',
    'PT061:Sport TV 4',
    'PT062:Sport TV 5',
    'PT063:Sport TV',
    'PT064:Sporting TV',
    'PT067:Toros TV',
    'PT093:EUROSPORT',
    'PT099:FIGHT NETWORK HD 1080',
    'PT100:SPORT TV 3HD',
    'PT114:Cancao Nova',
    'PT119:ELEVEN SPORTS 1 FHD',
    'PT120:ELEVEN SPORTS 2 FHD',
    'PT121:ELEVEN SPORTS 3 FHD',
    'PT122:ELEVEN SPORTS 4 FHD',
    'PT124:Sport TV NBA',
    'PT141:NBA FHD',
    'PT156:Eleven Sports 5',
    ]

    const ptKids =['PT009:Baby First',
    'PT010:Baby TV',
    'PT016:Cartoon Network',
    'PT022:Disney Channel',
    'PT023:Disney Junior',
    'PT037:Jim Jam',
    'PT046:Nickelodeon',
    'PT048:Panda Biggs',
    'PT107:BLOOMBERG',
    'PT134:JIMJAM',
    'PT149:SIC K',
    'PT154:SIC Kids',
    ]

    const itGeneral = ['IT002:Animal Planet',
    'IT003:Canale 5',
    'IT006:Cielo',
    'IT007:Canale 7',
    'IT023:Italia 2',
    'IT024:Italia 1',
    'IT026:La7',
    'IT032:Onda TV',
    'IT063:Rete 4',
    'IT064:RSI La 1',
    'IT065:RSI La 2',
    'IT071:Sky Classica',
    'IT073:POP',
    'IT086:Teleticino',
    'IT103:ALPHA HD',
    'IT113:DEEJAY TV NOVE',
    'IT120:TRM TV',
    'IT121:ReteSole Lazio',
    'IT123:Sardegna Uno TV',
    'IT124:Alto Adige',
    'IT125:TeleVenezia',
    'IT126:Rossini TV',
    'IT127:Julie Italia (Campania)',
    'IT128:Canale 10',
    'IT129:One TV Emilia HD (EmiliaRomagna)',
    'IT130:TV Qui Modena (EmiliaRomagna)',
    'IT131:Caffe TV 24',
    'IT132:Tele Padova Telecitt',
    'IT133:TelePace Tv',
    'IT134:ReteBiella TV',
    'IT135:Canale 2 (Basilicata)',
    'IT136:Alpa Uno TV',
    'IT137:TeleColore (Campania)',
    'IT138:Canale8',
    'IT139:Tv 6 (Abruzzo)',
    'IT140:Video Star TV',
    'IT141:Canale 85 (Basilicata)',
    'IT142:Di.TV 90',
    'IT143:Deejay TV',
    'IT144:TeleRadioSciacca',
    'IT145:TeleDehonTV',
    'IT146:Radio Norba TV',
    'IT156:Video Calabria (Calabria)',
    'IT157:Esperia TV (Calabria)',
    'IT158:TV Luna',
    'IT159:CAMPANE GOLD 1',
    'IT160:Canale 21 Lazio',
    'IT161:Video Tolento',
    'IT162:RTV 105',
    'IT163:RadioMonteCarlo',
    'IT164:Lucania.TV (Basilicata)',
    'IT165:TeleSondrioNews',
    'IT166:TeleSondrio Livigno',
    'IT167:VisualRadio TV (musica)',
    'IT168:m2o (musica)',
    'IT169:Telepavia',
    'IT170:Canale10',
    'IT171:TeleMonteNeve',
    'IT172:Video Brescia',
    'IT173:Radio Bruno TV (musica)',
    'IT174:PARAMOUNT NETWORK HD',
    'IT176:Umbria TV',
    'IT177:TeleStar1',
    'IT178:TeleTibur',
    'IT179:Teleliguria Sud',
    'IT180:TSD TV Arezzo',
    'IT181:Radio Tv Azzura',
    'IT182:Radio Universal TV',
    'IT183:GOLD TV',
    'IT184:Energy HD',
    'IT185:ETV Marche',
    'IT186:VideoNola TV',
    'IT187:RRADIO ZETA',
    'IT188:Fano TV',
    'IT190:Studio 100',
    'IT191:Donna TV',
    'IT195:VH1',
    'IT196: Radio Italia TV',
    'IT197:HSE24',
    'IT198:RADIOFRECCIA HD',
    'IT200:Iris HD',
    'IT201:Trentino TV',
    'IT202:Juventus Channel',
    'IT204:TeleBari',
    'IT208:Tele Sondrio News',
    'IT209:Marcopolo HD',
    'IT212:SPIKE',
    'IT217:Antenna Sicilia HD',
    'IT218:Radio Taormina TV (musica)',
    'IT219:MTV Music',
    'IT221:NOVE HD',
    'IT222:Orler TV',
    'IT223:Lupin III Channel',
    'IT224:Paramount Channel HD',
    'IT225:Pesca HD',
    'IT226:TVRS',
    'IT229:Premium Calcio 3 HD',
    'IT231:TG com 24 HD',
    'IT232:TELE MONTE NEVE 3',
    'IT234:Tele Dehon TV',
    'IT237:Tele Chiara',
    'IT259:Tele Boario',
    'IT260:Primocanale TV HD',
    'IT261:Qvc',
    'IT262:TV Avicenza',
    'IT263:Rai Nettuno',
    'IT267:ReteSole Umbria',
    'IT268:TV Videolina',
    'IT270:Teleromagna (EmiliaRomagna)',
    'IT271:Tele Arena Siena',
    'IT272:RTL 1025 TV',
    'IT273:Radio Radicale Senato TV',
    'IT274:Radio Radicale TV',
    'IT275:San Marino RTV',
    'IT276:TG NORBA 24',
    ]

    const itMovies = ['IT033:RAI MOVIE',
    'IT067:Sky Cinema 1',
    'IT068:Sky Cinema Classic',
    'IT069:Sky Cinema Comedy',
    'IT070:Sky Cinema Family',
    'IT072:Sky Cinema Passion',
    'IT075:Sky Primafila',
    'IT108:SKY CINEMA24 HD',
    'IT109:Sky Cinema1 HD',
    'IT240:SKY PRIMAFILA 1',
    'IT241:SKY PRIMAFILA 2',
    'IT242:SKY PRIMAFILA 3',
    'IT243:SKY PRIMAFILA 4',
    'IT244:SKY PRIMAFILA 5',
    'IT245:SKY PRIMAFILA 6',
    'IT246:SKY PRIMAFILA 7',
    'IT247:SKY PRIMAFILA 8',
    'IT248:SKY PRIMAFILA 9',
    'IT249:SKY PRIMAFILA 10',
    'IT250:SKY PRIMAFILA 12',
    'IT251:SKY PRIMAFILA 14',
    'IT257:Primafila 18',
    'IT287:SKY CINEMA 24 HD',
    'IT288:SKY CINEMA Action HD',
    'IT291:SKY CINEMA DRAMA',
    'IT292:SKY CINEMA DUE',
    'IT293:SKY CINEMA HITS HD',
    'IT294:SKY CINEMA ROMANC',
    'IT295:Sky Cinema Romance HD',
    'IT296:SKY CINEMA UNO 24 HD',
    'IT297:SKY CINEMA UNO HD',
    ]

    const itIntra = ['IT017:Fox Comedy IT',
    'IT018:Fox Crime',
    'IT019:Fox IT',
    'IT020:Fox Life',
    'IT021:Fox Animation',
    'IT027:Mediaset Extra',
    'IT028:Mediaset Iris',
    'IT035:RAI UNINETTUNO',
    'IT052:Rai Scuola',
    'IT055:Rai News 24',
    'IT057:Rai 1',
    'IT058:Rai 2',
    'IT059:Rai 3',
    'IT060:Rai 4',
    'IT061:Rai 5',
    'IT062:Real Time',
    'IT082:Sky Uno',
    'IT085:Sky Atlantic',
    'IT088:Top Crime',
    'IT098:SKY ATLANTIC +1',
    'IT099:SKY UNO 1',
    'IT100:FOX+ 1',
    'IT101:FOX CRIME+1',
    'IT102:Real Time+ 1',
    'IT111:SKY FOX LIFE + 1',
    'IT189:MEDIASET ITALIA DUE HD',
    'IT194:Giallo HD',
    'IT205:LA 5 HD',
    'IT210:Mediaset Extra',
    'IT211:Mediaset 20 HD',
    'IT213:MEDIASET 20 HD',
    'IT214:MEDIASET ITALIA 2',
    'IT252:TV 2000',
    'IT258:SKY UNO +',
    'IT264:Rai Scuola HD',
    ]

    const itSport = ['IT015:Euro Sport 1 IT',
    'IT016:Euro Sport 2 IT',
    'IT022:Inter Channel',
    'IT029:Dazn1 Sat',
    'IT066:Crime Investigation',
    'IT074:Sky Moto GP',
    'IT076:Sky Sport 24',
    'IT077:Sky Sport F1',
    'IT078:Sky Sport 1',
    'IT079:Sky Sport 2',
    'IT080:Sky Sport 3',
    'IT083:Sport Italia',
    'IT084:Super Tennis',
    'IT089:Dazn1 Sat | UHD',
    'IT090:Dazn1 Sat | HD',
    'IT091:Dazn1 Sat | SD',
    'IT092:Sky Sport Serie A | UHD',
    'IT093:Sky Sport Serie A | HD',
    'IT094:Sky Sport Serie A | SD',
    'IT095:Sky Sport MotoGP | UHD',
    'IT096:Sky Sport MotoGP | HD',
    'IT097:Sky Sport MotoGP | SD',
    'IT105:FOX Sport HD',
    'IT106:SKY SPORT MOTO GP',
    'IT107:SKY F1 HD',
    'IT110:SKY SPORT COLLECTION',
    'IT114:SUPERTENNIS',
    'IT115:Sky Sport 251',
    'IT116:Sky Sport 252',
    'IT117:Sky Sport 253',
    'IT118:Sky Sport 254',
    'IT119:Sky Sport 255',
    'IT147:DAZN 1 HD',
    'IT148:DAZN 2 HD',
    'IT149:DAZN 3 HD',
    'IT150:DAZN 4 HD',
    'IT151:DAZN 5 HD',
    'IT152:DAZN 6 HD',
    'IT153:DAZN 7 HD',
    'IT154:DAZN 8 HD',
    'IT155:DAZN 9 HD',
    'IT175:Hunting (Caccia)',
    'IT206:LAZIO CHANNEL HD',
    'IT207:Super J',
    'IT215:MotoGP HD',
    'IT227:SKY SUPER TENNIS HD',
    'IT228:SKY SUPER CALCIO HD',
    'IT230:Sky Sport Uno HD',
    'IT238:Sky Sport Serie A HD',
    'IT253:Sky Sport NBA HD',
    'IT254:Sky Sport Golf HD',
    'IT255:Sky Sport Football HD',
    'IT256:Sky Sport Arena HD',
    'IT265:RAI SPORT HD',
    'IT269:ROMA CHANNEL HD',
    'IT277:Supercalcio HD',
    'IT278:Sky Calcio 6 HD',
    'IT280:Sky Calcio 1 HD',
    'IT281:Sky Calcio 2 HD',
    'IT282:Sky Calcio 3 HD',
    'IT283:Sky Calcio 4 HD',
    'IT284:Sky Calcio 5 HD',
    'IT285:Sky Serie A',
    'IT286:Super!',
    'IT289:Super J HD (Abruzzo)',
    'IT290:Milan Channel',
    'IT298:Sky F1 FHD',
    ]

    const itCulture = ['IT001:Alice',
    'IT008:Discovery IT',
    'IT009:Discovery Science IT',
    'IT010:CANALE 10',
    'IT014:Dmax IT',
    'IT025:Discovery focus',
    'IT030:Nat Geo People IT',
    'IT031:Nat Geo Wild IT',
    'IT054:Rai Storia',
    'IT122:Fishing Tv',
    'IT193:Gambero Rosso HD',
    'IT216:Motor Trend HD',
    'IT220:NAT GEO PEOPLE FHD',
    'IT266:Rai Storia FHD',
    'IT279:Sky Arte HD',
    ]

    const itKids = ['IT004:Boing',
    'IT005:Cartoonito',
    'IT011:Disney IT',
    'IT012:Disney JR IT',
    'IT013:Disney XD IT',
    'IT051:Rai Gulp',
    'IT056:Rai Yoyo',
    'IT081:Manga',
    'IT104:Boing HD',
    'IT192:Frisbee TV',
    'IT199:Cartoonito',
    'IT203:K2',
    ]

    const itPrem = ['IT034:Premium Action',
    'IT036:Premium Cinema 2 24',
    'IT037:Premium Crime 24',
    'IT038:Premium Cinema 24',
    'IT039:Premium Action 24',
    'IT040:Premium Cinema',
    'IT041:Premium Energy',
    'IT042:Premium Comedy',
    'IT043:Premium Crime',
    'IT044:Premium Disney Junior',
    'IT045:Premium Emotion',
    'IT046:Sky Cinema uno full',
    'IT047:Premium Sport 2',
    'IT048:Premium Sport 1',
    'IT049:Premium Stories',
    'IT050:Premium Studio Universal',
    'IT053:Rai Premium',
    'IT112:Premium Cinema 2',
    'IT233:Premium Energy',
    'IT235:Premium Cinema 2',
    'IT236:Premium Cinema HD',
    'IT239:PREMIUM STORIES 24',
    ]

    const ukSport = ['UK014:BT Sport 1',
    'UK015:BT Sport 2',
    'UK016:BT Sport 3',
    'UK017:BT Sport ESPN',
    'UK040:Euro Sport 1',
    'UK041:Euro Sport 2',
    'UK055:Sky Sports Arena',
    'UK075:Sky Sports Mix',
    'UK076:Sky Sports MainEvent',
    'UK077:Sky Sports Action',
    'UK078:Sky Sports Cricket',
    'UK079:Sky Sports Golf',
    'UK080:Sky Sports PremierLeague',
    'UK081:Sky Sports F1',
    'UK086:Racing UK',
    'UK087:Sky Sports Football',
    'UK089:Eir Sport 1',
    'UK101:SKY SPORTS ACTION',
    'UK105:Setanta Sports 1',
    'UK106:PREMIERE SPORT HD',
    'UK111:Horror Channel 1',
    'UK112:Eurosport 2',
    'UK113:Eurosport 1',
    'UK114:Eir Sports2',
    'UK117:Sky Sports Premier League SD',
    'UK119:BT Sport Mosaic 2',
    'UK120:BT Sport Extra 4',
    'UK121:BT Sport Extra 2',
    'UK122:BT Sport Extra 1',
    'UK123:At The Races',
    'UK125:Premier Sports HD',
    'UK140:Sky Sport Main Events HD',
    'UK141:Sky Sports 2 HD 1080p',
    'UK142:Sky Sports 4 HD 1080p',
    'UK143:Sky Sports 5 HD 1080p',
    'UK144:Premier Sports FHD 1080',
    'UK155:Sky Sport 1 SD',
    'UK159:Mototrs TV',
    'UK178:BT Sport Europe HD',
    'UK179:Boxnation',
    'UK203:BOX NATION FHD',
    'UK215:BT Sport Extra 1',
    'UK216:BT Sport Extra 2',
    'UK217:BT Sport Extra 3',
    'UK218:BT Sport Extra 4',
    'UK235:EIR SPORTS 2 HD',
    'UK236:ELEVEN SPORTS 1 FHD',
    'UK237:ELEVEN SPORTS 2 FHD',
    'UK238:ESPN',
    'UK240:EUROSPORT 1 FHD',
    'UK241:EUROSPORT 2 FHD',
    'UK242:Fightbox HD',
    'UK247:Free Sports TV',
    'UK249:GOLD FHD',
    'UK255:HORROR CHANNEL',
    'UK288:RedBull',
    'UK294:Setanta Sports',
    'UK318:Sky Sports Racing FHD',
    'UK319:Sky Sports ACTION HD',
    ]

    const ukCine = ['UK007:BBC 1',
    'UK008:BBC 2',
    'UK009:Universal',
    'UK010:BBC 4',
    'UK022:CBS Action',
    'UK023:CBS Drama',
    'UK024:CBS Reality',
    'UK027:Movies 24',
    'UK037:Sky Drama',
    'UK042:Film 4',
    'UK044:FOX UK',
    'UK046:HBO UK',
    'UK047:HBO 1 UK',
    'UK050:ID UK',
    'UK056:RTE One',
    'UK057:Life Time',
    'UK058:Sky Living',
    'UK066:Sky Action',
    'UK067:Sky Comedy',
    'UK068:Sky Disney',
    'UK069:Sky Family',
    'UK070:Sky Arts',
    'UK072:Sky Premiere',
    'UK073:Sky ScFi Horror',
    'UK074:Sky Showcase',
    'UK083:Sky Thriller',
    'UK090:Sky One',
    'UK091:True Movies 1',
    'UK093:Sky Movies Modern',
    'UK094:HBO 2',
    'UK096:True Movies 2',
    'UK099:Sony Chnl 1',
    'UK100:Sky Two',
    'UK102:Sky Movies Select HD',
    'UK103:Sky Cinema Premiere 1',
    'UK104:Sky Atlantic 1',
    'UK116:Comedy Central Extra 1',
    'UK126:AMC FROM BT',
    'UK127:BBC ALBA',
    'UK128:BBC Parliament',
    'UK133:Movies 4 Men',
    'UK136:Sony Movie',
    'UK137:Sony Channel',
    'UK145:Sky Cinema Crime & Thriller HD',
    'UK146:Sky Cinema Drama & Romance HD',
    'UK147:Sky Cinema Sci-Fi & Horror HD',
    'UK148:Sky Cinema Select HD',
    'UK156:Sky Movies Drama',
    'UK157:SKY Atlantic HD',
    'UK163:ZEE CINEMA',
    'UK166:Sky Movies Greats',
    'UK167:Sky Movie Sci-Fi',
    'UK174:Drama',
    'UK185:Sky Witness HD',
    'UK193:AMC HD',
    'UK194:BBC 3 HD',
    'UK195:BBC Alba HD',
    'UK196:BBC Earth',
    'UK197:BBC Entertainment HD',
    'UK198:BBC Parliament',
    'UK199:BBC TV',
    'UK204:BOX OFFICE 1 HD',
    'UK205:BOX OFFICE 2 HD',
    'UK206:BOX OFFICE 3 HD',
    'UK207:BOX OFFICE 4 HD',
    'UK208:BOX OFFICE 5 HD',
    'UK209:BOX OFFICE 6 HD',
    'UK210:BOX OFFICE 7 HD',
    'UK211:BOX OFFICE 8 HD',
    'UK212:BOX OFFICE 9 HD',
    'UK221:CBS justice',
    'UK222:5SELECT',
    'UK234:Drama',
    'UK251:HBO 2 HD',
    'UK252:HBO Comedy HD',
    'UK270:MOVIES 4 MEN',
    'UK295:Sky 2 HD',
    'UK296:Sky Atlantic HD',
    'UK297:Sky Box Office',
    'UK298:SKY CIENMA ACTION HD',
    'UK299:SKY CIENMA COMEDY HD',
    'UK300:SKY CIENMA Family HD',
    'UK301:SKY CIENMA Greats HD',
    'UK302:Sky Cinema Hits',
    'UK303:SKY CIENMA PREMIER HD',
    'UK304:SKY CIENMA SELECT HD',
    'UK305:VIVA HD',
    'UK308:Sky Cinema Crime & Thriller FHD',
    'UK310:Sky Cinema Drama & Romance FHD',
    'UK313:Sky Cinema Premier FHD',
    'UK314:Sky Cinema Sci-Fi&Horror FHD',
    'UK315:Sky Cinema Select FHD',
    'UK316:Sky Cinema Showcase HD',
    'UK320:Sony Sab',
    'UK321:Sony Movies',
    'UK324:STAR BHARAT',
    'UK325:STAR GOLD',
    'UK326:STAR PLUS',
    'UK322:TCM FHD',
    ]

    const ukNews = ['UK011:BBC News',
    'UK018:CNN',
    'UK021:CBBC',
    'UK071:Sky News',
    'UK082:Sky Sports News',
    'UK095:BBC World News',
    'UK129:CNBC Europe',
    'UK130:FOX News',
    'UK182:At The Races',
    'UK188:92 NEWS',
    'UK189:ABC News HD',
    'UK192:ALJAZEERA HD',
    'UK228:CNBC',
    'UK229:CNN News',
    'UK239:EURONEWS HD',
    'UK245:Fox News HD',
    'UK246:FRANCE 24',
    'UK292:RTE NEWS',
    ]

    const ukKids = ['UK006:Baby TV',
    'UK013:Boomerang',
    'UK019:Cartoon network',
    'UK020:Cartoonito',
    'UK034:Disney UK',
    'UK035:Disney Junior UK',
    'UK036:Disney XD UK',
    'UK088:RTE Two',
    'UK097:Tiny Pop 1',
    'UK107:Nickelodeon',
    'UK108:Nick Jr Too',
    'UK149:Cbeebies',
    'UK164:Tiny POP',
    'UK168:Nicktoons',
    'UK169:Nick Jr',
    'UK170:London Live',
    'UK171:Nick be',
    'UK219:C ITV HD',
    'UK220:CBeebies HD',
    'UK268:London Live',
    'UK277:Nick Junior',
    'UK278:Nick Junior TOO',
    'UK279:Nick Toons HD',
    'UK291:RTE Junior',
    'UK306:Cartoonito',
    'UK312:Tiny POP',
    ]

    const ukDocum = ['UK005:Animal Planet',
    'UK030:Crime Investigiation',
    'UK032:Discovery',
    'UK033:Discovery Science',
    'UK049:History UK',
    'UK064:NAT GEO',
    'UK109:Nat Geo Wild',
    'UK115:Discovery History 1',
    'UK134:QUEST',
    'UK135:Real Lives',
    'UK152:H2',
    'UK158:Nat Geo Graphic',
    'UK176:Discovery Turbo',
    'UK175:DMax',
    'UK177:Discovery Shed',
    'UK184:Eden',
    'UK200:Blaze HD',
    'UK230:Discovery H&H',
    'UK231:Discovery Shed HD',
    'UK232:Discovery TURBO HD',
    'UK233:DMAX HD',
    'UK250:H2 FHD',
    'UK276:NAT GEO WILD FHD',
    'UK286:REAL LIVES',
    ]

    const ukEnter = ['UK001:3E',
    'UK002:4Seven',
    'UK003:5Star',
    'UK004:5USA',
    'UK012:BET',
    'UK025:Channel 4',
    'UK026:Channel 5',
    'UK028:W Watch',
    'UK029:Comedy Central',
    'UK031:Dave',
    'UK038:E! UK',
    'UK039:E4',
    'UK043:Good Food',
    'UK045:MTV UK',
    'UK048:Food Network',
    'UK051:ITV 1',
    'UK052:ITV 2',
    'UK053:ITV 3',
    'UK054:ITV 4',
    'UK059:More 4',
    'UK060:MTV Base',
    'UK061:MTV Class',
    'UK062:MUTV',
    'UK063:VH1 UK',
    'UK065:UTV',
    'UK084:TLC',
    'UK085:Travel Channel',
    'UK092:TLC – IRELAND',
    'UK098:Syfy 1',
    'UK110:LFC TV',
    'UK118:Challenge 1',
    'UK124:Alibi',
    'UK131:KERRANG',
    'UK132:KISS UK',
    'UK138:VICELAND',
    'UK139:MTV LIVE HD',
    'UK150:Magic',
    'UK151:TCM',
    'UK153:VIVA',
    'UK154:Yesterday',
    'UK160:Manchester United TV',
    'UK161:Living UK',
    'UK162:Eden',
    'UK165:Syfy',
    'UK172:Home & Health',
    'UK173:gold',
    'UK180:Pick(1)',
    'UK181:BBC Three HD',
    'UK183:BE3 Ireland',
    'UK186:VH 1 CLASSIC',
    'UK187:4 MUSIC HD',
    'UK190:ABN TV',
    'UK191:Alibi FHD',
    'UK201:Bloomberg HD',
    'UK202:BOX HITS HD',
    'UK213:Bravo HD',
    'UK214:SyFy FHD',
    'UK223:Challenge HD',
    'UK224:Channel 5 Star',
    'UK225:CHELSEA TV HD',
    'UK226:Club MTV',
    'UK227:Clubland TV',
    'UK243:Fine Living Network',
    'UK244:Fame TV',
    'UK248: CELTIC TV (LIVE MATCHES ONLY)',
    'UK253:Hunting Channel',
    'UK254:Home',
    'UK256:Horse Country',
    'UK257:HUM Europe',
    'UK258:ITVBE',
    'UK259:Liverpool FC TV',
    'UK260:Celtic FC TV',
    'UK261:IR TG4',
    'UK262:ISLAM CHANNEL',
    'UK263:Kerrang',
    'UK264:KISS',
    'UK265:LFC TV',
    'UK266:Ladbrokes',
    'UK267:Living',
    'UK269:Magic TV',
    'UK271:MTV Dance HD',
    'UK272:MTV Music HD',
    'UK273:MTV OMG',
    'UK274:MTV Rocks HD',
    'UK275:MTV Classic',
    'UK280:PBS America',
    'UK281:Pick TV',
    'UK282:POP',
    'UK283:Pop Max',
    'UK284:QVC Beauty HD',
    'UK285:QVC Style',
    'UK287:Really',
    'UK289:RISHTEY EUROPE',
    'UK290:ROK TV',
    'UK293:SAB TV',
    'UK307:Viceland HD',
    'UK309:VENUS TV',
    'UK311:RANGERS TV (LIVE MATCHES ONLY)',
    'UK317:The Box',
    'UK323:SPIKE',
    ]

    const esSport = ['ES009:Barca TV',
    'ES010:Bein Sport',
    'ES014:M Deportes 2',
    'ES015:M Deportes 1',
    'ES017:M Futbol',
    'ES018:M Golf',
    'ES020:Toros',
    'ES026:M Formula 1',
    'ES027:M MotoGP',
    'ES040:Euro Sport 1',
    'ES041:Euro Sport 2',
    'ES045:GOL TV',
    'ES051:LaLiga TV',
    'ES069:Teledeport',
    'ES079:Vamos',
    'ES084:Canal LIGA HD',
    'ES085:Canal FUTBOL HD',
    'ES086:Canal DEPORTES HD',
    'ES087:Canal DEPORTES 2 HD',
    'ES089:La Liga BAR HD',
    'ES092:Bein Liga HD',
    'ES095:BeiN La Liga',
    'ES096:BeiN Laliga FHD',
    'ES121:beIN Sports LaLiga HD',
    'ES122:beIN Sports LaLiga FHD',
    'ES123:DEPORTES 2 HD',
    'ES132:Vamos FHD',
    'ES125:LaLiga 123 FHD',
    'ES131:Real Madrid TV',
    'ES151:Real Madrid TV',
    'ES153:BARCA TV',
    'ES156:LaLiga 123 HD',
    'ES133:M. DEPORTES 1',
    'ES134:M. DEPORTES 2',
    'ES135:M. DEPORTES 3',
    'ES136:M. DEPORTES 4',
    'ES164:SKY NET SPORTS 2',
    'ES165:SKYNET SPORTS 1',
    'ES172:M. LIGA DE CAMPEONES',
    'ES173:Movistar Liga de Campeones 4 HD',
    'ES174:M. LIGA DE CAMPEONES 6',
    'ES182:BARCA TV',
    'ES183:GOL TV HD',
    'ES184:LA LIGA TV HD',
    'ES185:LA LIGA 1|2|3 TV HD',
    'ES186:beIN SPORTS ? HD',
    'ES187:Movistar Liga de Campeones',
    'ES188:Movistar Liga de Campeones 2',
    'ES189:M DEPORTES 1 HD',
    'ES190:M GOLF HD',
    'ES191:M FORMULA 1 HD',
    'ES193:M FUTBOL HD',
    'ES231:Toros Tv',
    'ES236:NRJ TV',
    'ES239:Movistar MotoGP',
    'ES241:Movistar Partidazo HD (event only)',
    'ES242:Movistar F1',
    'ES243:RealMadrid TV',
    'ES250:EUROSPORT',
    'ES251:Canal Deportes',
    'ES257:BeinSport HD',
    'ES258:BeinSport LaLiga HD',
    'ES263:CANAL GOLF',
    'ES264:CANAL MotoGP',
    'ES266:CANAL Toros TV',
    'ES274:EUROSPORT 1',
    'ES275:EUROSPORT 2',
    ]

    const esCinema = ['ES001:#0 HD',
    'ES003:A&E ES',
    'ES004:AMC ES',
    'ES006:AXN ES',
    'ES007:AXN White',
    'ES012:Calle 13',
    'ES013:M Action',
    'ES016:M Estrenos',
    'ES019:M Series Xtra',
    'ES021:M Xtra',
    'ES023:M Dcine',
    'ES025:M SERIES HD',
    'ES043:Fox ES',
    'ES044:Fox Life ES',
    'ES047:Hollywood',
    'ES053:M Comedia',
    'ES066:Syfy ES',
    'ES067:TCM ES',
    'ES070:TNT ES',
    'ES077:MoviStar Cine ?',
    'ES078:Movistar CineDoc&Roll',
    'ES081:SOMOS',
    'ES082:CANAL COCINA',
    'ES088:Canal DCINE HD',
    'ES090:Canal SERIES HD',
    'ES091:CANAL COCINA',
    'ES094:#0',
    'ES098:TAQUILLA 1',
    'ES099:TAQUILLA 10',
    'ES100:TAQUILLA 2',
    'ES101:TAQUILLA 3',
    'ES102:TAQUILLA 4',
    'ES103:TAQUILLA 5',
    'ES104:TAQUILLA 6',
    'ES105:TAQUILLA 7',
    'ES106:TAQUILLA 8',
    'ES107:TAQUILLA 9',
    'ES110:Alquiler 1 HD',
    'ES112:Alquiler 3 HD',
    'ES113:Alquiler 4 HD',
    'ES114:Alquiler 5 HD',
    'ES115:Alquiler 6 HD',
    'ES116:Alquiler 7 HD',
    'ES117:Alquiler 9 HD',
    'ES124:Syfy HD',
    'ES126:TAQUILLA 1 HD',
    'ES127:TAQUILLA 4 HD',
    'ES128:TAQUILLA 6 HD',
    'ES137:BOX OFFICE 5',
    'ES138:BOX OFFICE 10',
    'ES139:CANAL COCINA',
    'ES140:Canal DCINE HD',
    'ES158:MoviStar CINE',
    'ES166:SOMOS',
    'ES167:SUNDANCE FHD',
    'ES168:TAQUILLA 2 HD',
    'ES169:TAQUILLA 3 HD',
    'ES170:TAQUILLA 5 HD',
    'ES171:TAQUILLA 7 HD',
    'ES175:TELEMADRID FHD',
    'ES181:TVE Internacional',
    'ES198:Moviestar Portada',
    'ES208:SYFY',
    'ES209:FOX Life HD',
    'ES210:FOX HD',
    'ES211:AXN White HD',
    'ES212:AXN',
    'ES213:Calle 13 HD',
    'ES214:Movistar Accion',
    'ES215:Movistar Comedia HD',
    'ES216:Movistar DCine',
    'ES217:Movistar Xtra',
    'ES218:Movistar Series Xtra',
    'ES219:Movistar Estrenos',
    'ES220:TNT',
    'ES222:Paramount Channel',
    'ES223:Hollywood HD',
    'ES224:Moviestar Series',
    'ES225:Televisa HD',
    'ES244:Movistar Alquiler Presentation',
    'ES245:Movistar Alquiler 10 FHD',
    'ES246:Movistar Alquiler 11 FHD',
    'ES247:Movistar Alquiler 12 FHD',
    'ES248:Movistar Alquiler Multivision 1 FHD',
    'ES249:Movistar Alquiler Multivision 2 FHD',
    'ES252:#0 HD',
    'ES254:A&E',
    'ES255:AMC',
    'ES256:ODESSEIA',
    'ES259:CANAL ACCION HD',
    'ES260:CANAL Comedia',
    'ES261:CANAL Estrenos',
    'ES262:CANAL Formula One',
    'ES265:CANAL Series Xtra',
    'ES267:CANAL Xtra',
    ]

    const esDocum = ['ES028:Caza Y Pesca',
    'ES024:DeCasa',
    'ES032:Crimen Investigation',
    'ES034:Discovery ES',
    'ES046:Historia',
    'ES063:Odisea',
    'ES056:NAT GEO WILD ES',
    'ES057:NAT GEO ES',
    'ES071:Viajar',
    'ES073:DKISS',
    'ES080:BLAZE',
    'ES083:VIAJAR HD',
    'ES097:DMAX',
    'ES145:VIAJAR FHD',
    'ES149:CRIMEN & INVESTIGACION',
    'ES150:DKISS',
    'ES228:National Geographic',
    'ES229:Nat Geo Wild',
    'ES230:Historia',
    'ES232:Odisea Tv',
    'ES238:Canal DeCasa',
    'ES268:CAZA-Y-PESCA',
    'ES270:Decasa',
    'ES271:DISCOVERY',
    ]

    const esCarto = ['ES008:Baby TV',
    'ES011:Boing',
    'ES035:Disney ES',
    'ES036:Disney JR ES',
    'ES037:Disney XD ES',
    'ES059:NICK JR ES',
    'ES060:Nickelodeon ES',
    'ES064:Panda',
    'ES143:CANAL PANDA',
    'ES200:Baby TV',
    'ES201:BOING',
    'ES202:Disney XD',
    'ES203:Disney Junior',
    'ES204:Nickelodeon',
    'ES205:Disney Channel',
    'ES240:Panda',
    ]

    const esEspana = ['ES002:24 Horas',
    'ES005:Antena 3',
    'ES022:Cocina',
    'ES029:Clan Tve',
    'ES030:Comedy Central',
    'ES031:Cosmo',
    'ES033:Cuatro',
    'ES038:Divinity',
    'ES039:Energy',
    'ES042:FDF',
    'ES048:Iberalia',
    'ES049:LA 1',
    'ES050:LA 2',
    'ES052:La Sexta',
    'ES054:Mega',
    'ES055:MTV ES',
    'ES058:NEOX',
    'ES061:Canal DE Case',
    'ES062:NOVA',
    'ES065:Paramount',
    'ES068:Telecinco',
    'ES072:ARAGON TV',
    'ES074:Extremadura HD',
    'ES075:EXTREMADURA TV',
    'ES076:MEZZO LIVE HD',
    'ES093:40 TV',
    'ES108:13 TV',
    'ES109:CANAL SUR A',
    'ES111:VH1',
    'ES118:Andalucia TV',
    'ES119:ARAGON TV',
    'ES120:Nova',
    'ES129:Extremadura TV',
    'ES130:CLAN TVE',
    'ES141:Canal de las Estrellas',
    'ES142:Extremadura TV',
    'ES146:CLAN TVE',
    'ES144:Willow Cricket',
    'ES147:Classica',
    'ES148:TVE LA 2 HD',
    'ES152:Esperanza TV',
    'ES154:GALICIA TV',
    'ES155:Azteca Honduras',
    'ES157:MEZZO LIVE FHD',
    'ES159:N Cuatro HD',
    'ES160:Telecinco',
    'ES161:Mega',
    'ES162:Telecinco',
    'ES163:Teledeporte',
    'ES176:TELESUR HD',
    'ES177:Antena 3 HD',
    'ES178:TV Galicia',
    'ES179:TV3 Cat',
    'ES180:TVE 24H',
    'ES192:Antena 3 HD',
    'ES194:Cuatro',
    'ES195:N Cuatro HD',
    'ES196:Telecinco HD',
    'ES197:la sexta HD',
    'ES199:RTVA',
    'ES206:Canal Sur HD',
    'ES207:Canal Sur LaBanda HD',
    'ES235:MTV espana',
    'ES277:LA1 °',
    'ES279:NON STOP PEOPLE',
    'ES273:DW HD 2*',
    'ES227:Neox Tv',
    'ES234:Mega',
    'ES276:FDF SPAIN',
    'ES226:Energy',
    'ES272:Divinity °',
    'ES237:Cosmo FHD',
    'ES221:Comedy Central',
    'ES233:Nova',
    'ES253:24-Horas °',
    'ES269:CLAN TVE',
    ]

    const frSport = ['FR003:AB Moteur',
    'FR009:Bein Sport 4 Max',
    'FR011:Bein Sport 5 Max',
    'FR012:Bein Sport 6 Max',
    'FR013:Bein Sport 7 Max',
    'FR014:Bein Sport 8 Max',
    'FR015:Bein Sport 9 Max',
    'FR010:Bein Sport 10 Max',
    'FR017:Bein Sport 1',
    'FR018:Bein Sport 2',
    'FR016:Bein Sport 3',
    'FR027:Canal Sport',
    'FR050:Euro Sport 1 FR',
    'FR051:Euro Sport 2 FR',
    'FR062:Info Sport',
    'FR081:SFR Sport 1',
    'FR082:SFR Sport 2',
    'FR083:SFR Sport 3',
    'FR080:SFR Sport 4',
    'FR136:Persiana 1',
    'FR112:Eurosport 1',
    'FR111:Eurosport 2',
    'FR266:EUROSPORT 1 FHD',
    'FR267:EUROSPORT 2 FHD',
    'FR268:EXTREME SPORTS HD',
    'FR177:BFM SPORT',
    'FR113:INFOSPORT',
    'FR329:Foot +',
    'FR349:RMC SPORT 1 HD',
    'FR350:RMC SPORT 2 HD',
    'FR351:RMC SPORT 3 HD',
    'FR352:RMC SPORT 4 HD',
    'FR337:RMC ACCESS 1',
    'FR338:RMC ACCESS 2',
    ]

    const frEnter = ['FR041:CStar',
    'FR002:6Ter',
    'FR004:AB1',
    'FR005:AB3',
    'FR007:Animaux',
    'FR008:Arte',
    'FR042:Discovery',
    'FR043:Discovery Science',
    'FR067:NAT GEO',
    'FR068:NAT GEO WILD',
    'FR070:NRJ Hits',
    'FR075:Planete',
    'FR076:Planete A&E',
    'FR077:Planete CI',
    'FR079:Seasons',
    'FR096:NRJ12 HD',
    'FR126:SCIENCE ET VIE HD',
    'FR146:Trace Mziki',
    'FR149:Trace Toca',
    'FR156:Trace Tropical',
    'FR157:Trace Urban',
    'FR170:E! Entertainment',
    'FR172:Discovery Investigation HD',
    'FR166:MCM',
    'FR167:MCM TOP',
    'FR236:DJAZZ TV',
    'FR258:Discovery FAMILY FHD',
    'FR259:Discovery INVESTIGATION FHD',
    'FR355:RMC STORY HD',
    'FR022:C8',
    'FR028:Canal',
    'FR031:Chasse et Pache',
    'FR032:Cherie 25',
    'FR040:Comedie Plus',
    'FR048:Equidiae Live',
    'FR052:France 2',
    'FR054:France 3',
    'FR055:France 4',
    'FR056:France 5',
    'FR057:France O',
    'FR058:Game One',
    'FR060:HD1',
    'FR061:i Tele',
    'FR063:L’EQUIPE 21',
    'FR065:M6',
    'FR071:TFX',
    'FR073:Pairs Permiere',
    'FR078:RTL9',
    'FR084:Syfy FR',
    'FR085:Teva',
    'FR087:TF1',
    'FR088:Toute Lhistoire',
    'FR089:Trace Urban',
    'FR090:TV Breizh',
    'FR091:TV5 Monde',
    'FR092:Voyage',
    'FR093:W9',
    'FR101:D8',
    'FR109:COMEDIE HD',
    'FR110:CANAL HD',
    'FR114:La Deux',
    'FR115:La une BE',
    'FR116:NUMERO 23 HD',
    'FR121:ZOUZOU HD',
    'FR122:PARIS PREMIERE HD',
    'FR123:rmc decouverte',
    'FR124:RTS Deux',
    'FR125:RTS Un',
    'FR127:SCIENCES & VIE',
    'FR129:MB Live TV',
    'FR130:Zouzou TV LOCAL',
    'FR137:WEO HD',
    'FR139:NT1',
    'FR141:TEVA/TMC',
    'FR142:TREK HD',
    'FR144:Radio Contact',
    'FR145:Sundance TV',
    'FR159:TV3V',
    'FR161:BET',
    'FR162:J One',
    'FR164:FOOT 24',
    'FR165:TV5 Style',
    'FR168:Science & Vie HD',
    'FR169:CRIME DISTRICT HD',
    'FR171:BFM business',
    'FR173:BE CURIOUS TV HD (1080P)',
    'FR175:EQUIDIA LIFE',
    'FR176:GOLF HD',
    'FR178:Syfy HD',
    'FR179:Teva',
    'FR192:TV5Monde Maghreb-Orient',
    'FR194:BFM LYON',
    'FR195:VOSGES TV',
    'FR196:ALTICE STUDIO FHD',
    'FR197:Antenne Reunion',
    'FR198:VICELAND HD',
    'FR199:USHUAIA HD',
    'FR200:BET FHD',
    'FR201:BFM Business HD',
    'FR202:BFM HD',
    'FR203:BFM PARIS HD',
    'FR204:Black Classic',
    'FR207:ILTV',
    'FR209:VIRGIN',
    'FR210:13EME RUE',
    'FR211:Bblack! Africa',
    'FR212:Bblack! Caribbean',
    'FR213:CPAC',
    'FR214:FASHION MIDNITE',
    'FR216:Serie Club',
    'FR217:M6 Boutique HD',
    'FR218:M6 Music Hits',
    'FR219:HD 1',
    'FR220:RTS LA DEUX HD',
    'FR221:Alsace TV',
    'FR222:SyFy Universal HD',
    'FR223:BRAVA HD',
    'FR235:TL7',
    'FR237:MTV BASE',
    'FR238:MTV DANCE',
    'FR239:MTV HITS',
    'FR240:TVM 3 HD',
    'FR241:TV5 MONDE',
    'FR242:CANAL DECALE HD',
    'FR243:CANAL Emotion HD',
    'FR244:CANAL FAMILY HD',
    'FR245:CANAL HD',
    'FR247:TV Vendee',
    'FR248:CANAL SERIE HD',
    'FR249:TV7 Bordeaux',
    'FR250:CANAL SPORT FHD',
    'FR251:CINE CLUB HD',
    'FR252:CINE FRISSON HD',
    'FR253:CINE Star HD',
    'FR254:TV8 MontBlanc 2',
    'FR255:TV5 Europe HD',
    'FR256:TVR TV Rennes 35',
    'FR257:VIA LMTV SARTHE',
    'FR260:E! FHD',
    'FR263:RTS LA UN',
    'FR264:ELLE GIRL HD',
    'FR269:VIA MIRABELLE TV',
    'FR270:FOOT 24 HD',
    'FR271:TREK FHD',
    'FR272:FRANCEO HD',
    'FR273:via Occitanie TV',
    'FR274:Via Vosges TV',
    'FR275:GONG MAX HD',
    'FR276:Gong TV',
    'FR277:RTS Deux FHD',
    'FR279:J ONE FHD',
    'FR280:KOMBAT SPORTS HD',
    'FR281:KTO HD',
    'FR282:LA CHAINE NORMANDIE HD',
    'FR284:viàVosges',
    'FR285:TVR',
    'FR286:TVPI',
    'FR287:W9 Music',
    'FR288:PLUG RTL',
    'FR289:MCM HD',
    'FR290:MCM TOP',
    'FR291:MEZZO LIVE HD',
    'FR292:TRACE AYITI',
    'FR293:TRACE AFRICA HD',
    'FR294:MTV FRANCE',
    'FR295:MTV Music',
    'FR296:ZouZous',
    'FR297:MY CUISINE FHD',
    'FR299:La Chaine Normande',
    'FR300:AB MOTEURS',
    'FR303:CGTN',
    'FR304:RTL FHD',
    'FR312:OLTV HD',
    'FR313:TRACE GOSPEL',
    'FR320:Planete+ HD',
    'FR323:SyFy Universal',
    'FR324:Equida_FR',
    'FR330:ALSACE 20',
    'FR331:A+',
    'FR333:CINEMA ACTION 2',
    'FR334:NOLYWOOD',
    'FR335:PICKLE TV',
    'FR342:PARIS PREMIERE FHD',
    'FR344:RT France',
    'FR346:EMCI TV',
    'FR347:Fashion L’Original',
    'FR348:RMC Decouverte HD',
    'FR353:BipTV',
    'FR356:Bblack Classik',
    ]

    const frCinema = ['FR001:13 Eme Rue',
    'FR006:Action',
    'FR023:Canal Cinema',
    'FR024:Canal Decale',
    'FR025:Canal Family',
    'FR026:Canal Series',
    'FR033:Cine Class',
    'FR034:Cine Emotion',
    'FR035:Cine Famiz',
    'FR036:Cine Frisson',
    'FR037:Cine FX',
    'FR038:Cine Polar',
    'FR039:Cine Permier',
    'FR045:Disney Cinema',
    'FR072:Paramount',
    'FR086:Series Club',
    'FR102:CANAL PLAY 1',
    'FR103:CANAL PLAY 2',
    'FR104:CANAL PLAY 3',
    'FR105:CANAL PLAY 4',
    'FR106:CANAL PLAY 5',
    'FR107:CANAL PLAY 6',
    'FR108:CANAL PLAY 7',
    'FR133:A.LA.CARTE.1',
    'FR134:A.LA.CARTE.3',
    'FR135:A.LA.CARTE.4',
    'FR131:A LA CARTE 5',
    'FR132:A la Carte 6',
    'FR098:A LA CARTE 7',
    'FR099:A LA CARTE 8',
    'FR100:A LA CARTE 9',
    'FR097:A LA CARTE 10',
    'FR117:OCS CHOC HD',
    'FR118:OCS CITY',
    'FR119:OCS GEANT',
    'FR120:OCS MAX',
    'FR138:TMC HD ( 1080P )',
    'FR140:TCM CINEMA',
    'FR160:ALTICE STUDIO HD',
    'FR143:OCS Go Cinema 1 HD',
    'FR148:Orange Cinema 1 HD',
    'FR150:Orange Cinema 3 HD',
    'FR151:Orange Cinema 4 HD',
    'FR152:Orange Cinema 5 HD',
    'FR153:Orange Cinema Action HD',
    'FR154:Orange Cinema Aventure HD',
    'FR155:Orange Cinema HD',
    'FR158:Orange Documentaire HD',
    'FR147:OCS Go Cinema 5 HD',
    'FR308:OCS Go Cine 3 HD',
    'FR309:OCS GO CINE 4 HD',
    'FR310:OCS Go Cine 5 HD',
    'FR193:OCS GEANTS',
    'FR234:Cine+ Classic',
    'FR182:A LA CARTE 1',
    'FR183:A LA CARTE 2',
    'FR184:A LA CARTE 3',
    'FR185:A LA CARTE 4',
    'FR186:A LA CARTE 5',
    'FR188:A LA CARTE 7',
    'FR189:A LA CARTE 8',
    'FR190:A LA CARTE 9',
    'FR191:A LA CARTE 10',
    'FR208:COMEDY CENTRAL HD',
    'FR233:Cine Action',
    'FR225:Canal Play 1',
    'FR226:Canal Play 2',
    'FR227:Canal Play 3',
    'FR228:Canal Play 4',
    'FR231:Canal Play 7',
    'FR229:Canal Play 5',
    'FR230:Canal Play 6',
    'FR232:Canal Play 8',
    'FR298:Orange Comment C’Est Fait',
    'FR305:OCS CHOC FHD',
    'FR306:OCS City HD',
    'FR307:OCS GEANT FHD',
    'FR311:OCS MAX FHD',
    'FR314:Orange Cinema 1 HD',
    'FR316:Orange Cinema 3 HD',
    'FR317:Orange Cinema 4 HD',
    'FR318:Orange Cinema 5 HD',
    'FR321:ORANGE Cinema ACTION HD',
    'FR322:Orange Cinema Aventure HD',
    'FR325:Orange Cinema DOCUMENTAIRE HD',
    'FR326:Orange Cinema ENQUETE EXCLUSIVE HD',
    'FR327:Orange Cinema Horreur HD',
    'FR328:ORANGE DISNEY 1',
    'FR339:Orange Premium 6',
    'FR340:Orange Premium 7',
    'FR341:Orange Premium 8',
    'FR332:Warner tv',
    'FR187:TCM CINEMA FHD',
    'FR345:TF1 SERIES FILMS HD',
    'FR174:Cine Premier HD (1080P)',
    ]

    const frKids = ['FR020:Boing',
    'FR021:Boomerang',
    'FR029:Canal J',
    'FR030:Cartoon Network',
    'FR044:Disney FR',
    'FR046:Disney Jr Fr',
    'FR047:Disney XD FR',
    'FR059:GULLI',
    'FR066:Mangas',
    'FR069:NICKELODEON',
    'FR074:PIWI',
    'FR095:TELETOON',
    'FR180:TF1 HD',
    'FR128:Tiji',
    'FR246:CANAL J HD',
    'FR261:NICKELODEON 4TEEN',
    'FR301:NICKELODEON JUNIOR',
    'FR302:TOONAMI FHD',
    'FR315:TELETOON HD',
    'FR319:TELETOON PLUS',
    'FR343:TIJI HD',
    'FR354:TELETOON HD',
    ]

    const frNews = ['FR020:Boing',
    'FR021:Boomerang',
    'FR029:Canal J',
    'FR030:Cartoon Network',
    'FR044:Disney FR',
    'FR046:Disney Jr Fr',
    'FR047:Disney XD FR',
    'FR059:GULLI',
    'FR066:Mangas',
    'FR069:NICKELODEON',
    'FR074:PIWI',
    'FR095:TELETOON',
    'FR180:TF1 HD',
    'FR128:Tiji',
    'FR246:CANAL J HD',
    'FR261:NICKELODEON 4TEEN',
    'FR301:NICKELODEON JUNIOR',
    'FR302:TOONAMI FHD',
    'FR315:TELETOON HD',
    'FR319:TELETOON PLUS',
    'FR343:TIJI HD',
    'FR354:TELETOON HD',
    ] 

    const be = ['BE001:2BE Belgium',
    'BE002:Acht Belgium',
    'BE003:NOTELE TOURNAI',
    'BE004:Zes HD',
    'BE005:Een Belgium',
    'BE006:La Deux Belgium',
    'BE007:Plug RTL Belgium',
    'BE008:RTL TVI Belgium',
    'BE009:La Une Belgium',
    'BE010:VIJF Belgium',
    'BE011:La Trois Belgium',
    'BE012:Canvas Belgium',
    'BE013:Vitaya Belgium',
    'BE014:Vier Belgium',
    'BE015:VTM Belgium',
    'BE016:Club RTL Belgium',
    'BE017:Q2 FHD',
    'BE018:ELEVEN SPORTS 1 HD',
    'BE019:AB1 HD',
    'BE020:AB3 HD',
    'BE021:TELEVESDRE VERVIERS',
    'BE022:BX1 HD',
    'BE023:KETNET',
    'BE024:CANVAS FHD',
    'BE025:VOO SPORT 1',
    'BE026:VITAYA',
    'BE027:VIJF',
    'BE028:VIER FHD',
    'BE029:Cinema Kids',
    'BE030:Cinema Plus',
    'BE031:CLUB RTL HD',
    'BE032:CURIOUS HD',
    'BE033:EEN FHD',
    'BE034:ELEVEN SPORTS 2 HD',
    'BE035:ELEVEN SPORTS 3 HD',
    'BE036:Play Sports 1',
    'BE037:F Plus',
    'BE038:FEN TV',
    'BE039:Play Sports 2',
    'BE040:KETNET HD',
    'BE041:LA DEUX FHD',
    'BE042:LA TROIS',
    'BE043:LA UNE HD',
    'BE044:Kadet',
    'BE045:NAT GEO FHD',
    'BE046:Nova Sport',
    'BE047:VTM FHD',
    'BE048:VOO SPORT World 2 HD',
    'BE049:PLUG RTL HD',
    'BE050:RADIO CONTACT LIVE',
    'BE051:RTL Lux',
    'BE052:RTL LOUNGE HD',
    'BE053:RTL HD',
    'BE054:RTL LOUNGE HD',
    'BE055:RTS Deux HD',
    'BE056:RTS Un HD',
    'BE057:Tele Zurich',
    'BE058:TVO HD',
    'BE059:VEDIA',
    'BE060:Vier FHD',
    'BE061:VIJF HD',
    'BE062:VITAYA HD',
    ]

    const bg = ['BG001:BNT 1 HD',
    'BG002:BNT 2 HD',
    'BG003:CineMax 1 HD',
    'BG004:CineMax 2 HD',
    'BG005:Diema HD',
    'BG006:Diema Spor 1',
    'BG007:Diema Spor 2',
    'BG008:EuroSport',
    'BG009:EuroSport 2',
    'BG010:Fox Crime HD',
    'BG011:BNT HD',
    'BG012:Fox Tv HD 1080',
    'BG013:bTV Action HD 1080',
    'BG014:bTV HD',
    'BG015:Tiankov Folk',
    'BG016:Planeta HD',
    'BG017:HBO 2 HD 1080',
    'BG018:HBO 3 HD 1080',
    'BG019:Music Channel',
    'BG020:Nat Geo Wild HD',
    'BG021:National Geographic',
    'BG022:NICK JR',
    'BG023:Skat TV',
    'BG024:Nova TV',
    'BG025:Planeta',
    'BG026:Travel TV',
    'BG027:Folklor TV',
    'BG028:F Plus',
    'BG029:24 Kitchen HD',
    'BG030:ACTION PLUS',
    'BG031:Bulgaria 24',
    'BG032:AMC',
    'BG033:Auto Motor Sport HD',
    'BG034:Balkanika Music HD',
    'BG035:BG Music HD',
    'BG036:BIT HD',
    'BG037:Bloomberg TV HD',
    'BG038:BNT 1 HD',
    'BG039:BNT 2 HD',
    'BG040:BNT 4',
    'BG041:BTV Comedy',
    'BG042:CBS REAILTY',
    'BG043:iConcerts HD',
    'BG044:bTV Action HD',
    'BG045:bTV Cinema',
    'BG046:bTV HD',
    'BG047:bTV Lady',
    'BG048:Bulgaria ON Air',
    'BG049:Cartoon Network',
    'BG050:Cherno More',
    'BG051:Cinema Plus',
    'BG052:CINEMAX',
    'BG053:Harmonia',
    'BG054:Cinemax 2 HD',
    'BG055:CITY MUSIC',
    'BG056:AXN HD',
    'BG057:Comedy Plus',
    'BG058:ANIMAL PLANET HD',
    'BG059:Diema Family HD',
    'BG060:Diema Sport 2 HD',
    'BG061:VTK',
    'BG062:Diema TV',
    'BG063:Discovery Channel FHD',
    'BG064:Disney Channel',
    'BG065:Dnes HD',
    'BG066:E-KIDS',
    'BG067:MAX SPORT 3 HD',
    'BG068:EUROSPORT 1 HD',
    'BG069:EUROSPORT 2 HD',
    'BG070:Evrokom',
    'BG071:COMEDY CENTRAL',
    'BG072:Djazz',
    'BG073:FEN Folk TV',
    'BG074:FEN TV HD',
    'BG075:Fight Box HD',
    'BG076:FILMBOX Extra HD',
    'BG077:VIASAT NATURE & HISTORY HD',
    'BG078:TV Roma',
    'BG079:Fine Living',
    'BG080:Folklor TV',
    'BG081:FOX HD',
    'BG082:FOX Life HD',
    'BG083:HBO 1 FHD',
    'BG084:HBO 2 FHD',
    'BG085:HBO 3 FHD',
    'BG086:Hobby TV HD',
    'BG087:ID Xtra HD',
    'BG088:JIM JAM',
    'BG089:Kanal 3 HD',
    'BG090:Kino Nova',
    'BG091:Magic TV',
    'BG092:MAX Sport 2 HD',
    'BG093:Movie Strar',
    'BG094:Music Channel HD',
    'BG095:NAT GEO HD',
    'BG096:NAT GEO Wild HD',
    'BG097:Nickelodeon',
    'BG098:NOVA KINO',
    'BG099:NOVA SPORT HD',
    'BG100:NOVA TV HD',
    'BG101:Planeta Folk',
    'BG102:PLANETA HD',
    'BG103:RING BG HD',
    'BG104:ROMA TV',
    'BG105:TV Plus',
    'BG106:Sportal HD',
    'BG107:The Voice',
    'BG108:TRACE Sport Stars HD',
    'BG109:Travel Channel',
    'BG110:TV 1000',
    ]

    const ch = ['CHE001:Tele1AG',
    'CHE002:RTS UN',
    'CHE003:Swiss Sport TV',
    'CHE004:Radio Argovia star',
    'CHE005:Radio Pilatus',
    'CHE006:Puls 8 HD',
    'CHE007:TV 24',
    'CHE008:TV 25',
    'CHE009:Radio3i HD',
    'CHE010:Musig24',
    'CHE011:RTS 1 HD',
    'CHE012:Kanal 9',
    'CHE013:LFM TV',
    'CHE014:Teleclub Sport 1',
    'CHE015:RSI LA 1 HD',
    'CHE022:RSI LA 2 HD',
    'CHE023:SRF 1 HD',
    'CHE028:SRF 2 HD',
    'CHE030:Folx TV',
    'CHE031:RTS Deux HD',
    'CHE034:La Télé',
    'CHE035:SRF 1 HD',
    'CHE036:SRF Info HD',
    'CHE037:Swiss +5',
    'CHE038:Teleclub Zoom',
    'CHE039:Teleclub Cinema',
    'CHE043:TELE ZURICH',
    'CHE046:Die Neue Zeit TV',
    'CHE049:TeleBarn HD',
    'CHE050:Tele M1',
    'CHE051:Teleclub Action FHD',
    ]

    const cz = ['CZ001:Elektrika TV',
    'CZ002:FILM+',
    'CZ005:Sport 2 HD',
    'CZ012:Nickelodeon',
    'CZ018:Minimax',
    'CZ021:iConcerts',
    'CZ033:Duck TV',
    'CZ037:Brava HD',
    'CZ039:FashionTV Czech&Slovak',
    'CZ041:CS FILM',
    'CZ042:CT2 HD',
    'CZ044:DAJTO',
    'CZ045:JOJ',
    'CZ046:PRIMA',
    'CZ047:PRIMA COMEDY CENTRAL',
    'CZ048:PRIMA LOVE',
    'CZ049:Prima Plus',
    'CZ050:PRIMA ZO OM',
    'CZ051:Ocko Expres HD',
    'CZ053:Ocko Gold HD',
    'CZ054:AXN',
    'CZ055:Ocko HD',
    'CZ056:Televize Natura',
    'CZ058:Nova 2',
    'CZ060:CS Film',
    'CZ061:Wau HD',
    'CZ063:VYCHODESKA',
    'CZ064:POLAR FHD',
    'CZ065:PRAHA TV FHD',
    'CZ067:Discovery CHANNEL',
    'CZ068:Prima Cool',
    'CZ069:Disney Channel',
    'CZ074:Retro Music TV',
    'CZ075:Nickelodeon',
    'CZ076:MNAM TV',
    'CZ077:BOOMERANG',
    'CZ080:Filmbox Extra HD',
    'CZ082:Kino SVET',
    'CZ086:HBO 2 HD',
    'CZ088:HBO HD',
    'CZ089:Óčko',
    'CZ090:iConcerts',
    'CZ091:Óčko Expres',
    'CZ093:Óčko Gold',
    'CZ096:MTV EUROPE',
    'CZ097:NAT GEO HD',
    'CZ098:NAT GEO WILD HD',
    'CZ101:Šlágr',
    'CZ104:Nova Action HD',
    'CZ107:Šlágr 2',
    'CZ108:Nova Sport 1 HD',
    'CZ110:Prima Comedy Central',
    'CZ111:Prima HD',
    'CZ112:Prima Love HD',
    'CZ113:Prima MAX HD',
    'CZ117:REBEL',
    'CZ120:Spektrum HD',
    'CZ122:Sport 2 HD',
    ]

    const dk = ['DK001:C MORE SERIES',
    'DK002:C More Emotion',
    'DK003:C More Live',
    'DK004:CARTOON NETWORK',
    'DK005:6 Eren',
    'DK006:COMEDY CENTRAL',
    'DK007: Nat Geo',
    'DK008:CANAL 9 DK',
    'DK009:DISNEY CHANNEL',
    'DK010:C More First',
    'DK011:ANIMAL PLANET HD',
    'DK012:Disney Channel (D)',
    'DK013:DR 2',
    'DK014:DR K',
    'DK015:DR RAMASJANG',
    'DK016:National Geographic',
    'DK017:DR ULTRA',
    'DK018:KANAL 5',
    'DK019:DR 1',
    'DK020:NRK 1',
    'DK021:TV 2 CHARLIE',
    'DK022:Investigation Discovery',
    'DK023:TV 2 FRI',
    'DK024:DK 4',
    'DK025:TV3 SPORT 2',
    'DK026:TV 2 ZULU',
    'DK027:TV 3',
    'DK028:TV 3 SPORT 1',
    'DK029:TV 3 SPORT 2',
    'DK030:TV 2 ZEBRA',
    'DK031:TV 6',
    'DK032:TV NORGE',
    'DK033:TV2 NEWS',
    'DK034:TV3 Denmark',
    'DK035:TV3 SPORT 1',
    'DK036:TV 2 SPORT',
    'DK037:TV 2 NORGE',
    'DK038:VIASAT HOCKEY',
    'DK039:Viasat History HD',
    'DK040:VIASAT FILM ACTION',
    'DK041:VIASAT FILM COMEDY',
    'DK042:VIASAT FILM FAMILY',
    'DK043:Viasat Series HD',
    'DK044:VIASAT FILM PREMIERE',
    'DK045:VIASAT FOTBOLL',
    'DK046:VIASAT GOLF',
    'DK047:VIASAT HISTORY',
    'DK048:VFILM ACTION',
    'DK049:Disney XD',
    'DK050:TV3 Puls',
    'DK051:TV2 Zulu',
    'DK052:VIASAT NATURE',
    'DK053:VIASAT SERIES',
    'DK054:VIASAT SPORT',
    'DK055:3 Plus',
    'DK056:DR1',
    'DK057:DK4',
    'DK058:Kanal TV5',
    'DK059:TV2 Fri',
    'DK060:TV2 News',
    'DK061:VIASAT MOTOR',
    'DK062:Kanal 4',
    'DK063:TV3',
    'DK064:TV 2 LORRY',
    'DK065:SVT 2',
    'DK066:Viasat Nature HD',
    'DK067:C More Hits FHD',
    'DK068:C More Live',
    'DK069:TV3 Max',
    'DK070:DR 1 FHD',
    'DK071:DR 2 HD',
    'DK072:DR K FHD',
    'DK073:DR Ramasjang HD',
    'DK074:DR ULTRA HD',
    'DK075:EUROSPORT 1 FHD',
    'DK076:Kanal 4 Danmark',
    'DK077:Kanal 4 FHD',
    'DK078:Kanal 5 FHD',
    'DK079:KANAL 9 HD',
    'DK080:MTV HD',
    'DK081:EUROSPORT 2 FHD',
    'DK082:NAT GEO FHD',
    'DK083:NAT GEO Wild HD',
    'DK084:Nickelodeon HD',
    'DK085:NRK 1',
    'DK086:C More Hits FHD',
    'DK087:TLC FHD',
    'DK088:TV 2 ZEBRA',
    'DK089:TV 6',
    'DK090:TV2 Bornholm',
    'DK091:TV2 CHARLI',
    'DK092:TV2 Fyn HD',
    'DK093:TV2 Lorry HD',
    'DK094:TV2 News',
    'DK095:TV2 SPORT HD',
    'DK096:TV2 ZULU HD',
    'DK097:TV3 Danmark',
    'DK098:Viasat Hockey',
    'DK099:VIASAT EXPLORE',
    'DK100:Viasat Film Action',
    'DK101:Viasat Film Family',
    'DK102:Viasat Film Hits HD',
    'DK103:VIASAT FILM PREMIERE HD',
    'DK104:Viasat Football HD',
    'DK105:VIASAT GOLF',
    ]

    const gr = ['GR001:Ote_Sport_Highlights',
    'GR002:Vouli TV',
    'GR003:VOULI',
    'GR004:Alert',
    'GR005:Village_Cinema',
    'GR006:ERT Sport FHD',
    'GR007:OTE Sports 8',
    'GR008:EEK OLD MOVIES 2',
    'GR009:EEK OLD MOVIES 1',
    'GR010:EEK CINEMA 80s 1',
    'GR011:Village_Cinema',
    'GR012:ANT1',
    'GR013:Action 24 (Backup)',
    'GR014:Disney Junior',
    'GR015:Alert',
    'GR016:Alpha',
    'GR017:Alpha (Backup)',
    'GR018:ANT 1 (Backup)',
    'GR019:Attica',
    'GR020:Disney Channel HD',
    'GR021:BBC_Earth',
    'GR022:Blue Sky',
    'GR023:BEST Movies 1 HD',
    'GR024:Ch9',
    'GR025:History',
    'GR026:Crime_Investigation',
    'GR027:EuroSport 1',
    'GR028:Disney_Junior',
    'GR029:Animal Planet',
    'GR030:E',
    'GR031:Action 24',
    'GR032:ERT 1 (Backup)',
    'GR033:ERT 2 (Backup)',
    'GR034:ERT 3 (Backup)',
    'GR035:ERT_1',
    'GR036:Skai',
    'GR037:ERT_3',
    'GR038:Extra',
    'GR039:MEGA TV',
    'GR040:AB Channel',
    'GR041:Fox',
    'GR042:Kontra',
    'GR043:Eurosport 2',
    'GR044:CHANNEL 9',
    'GR045:Mad',
    'GR046:Makedonia (Backup)',
    'GR047:TV 1000',
    'GR048:Nat_Geo_Wild',
    'GR049:Alpha',
    'GR050:Nautical_Channel',
    'GR051:Nickelodeon',
    'GR052:Nickelodeon (Backup)',
    'GR053:TRT',
    'GR054:Open_Beyond',
    'GR055:Rise',
    'GR056:Skai (Backup)',
    'GR057:Smile (Backup)',
    'GR058:Start TV',
    'GR059:Star',
    'GR060:Star (Backup)',
    'GR061:TCM',
    'GR062:Sigma',
    'GR063:Rik',
    'GR064:Viasat_History',
    'GR065:OMEGA',
    'GR066:Vouli',
    'GR067:Nea Tv',
    'GR068:Star HD',
    'GR069:SMILE',
    'GR070:EURONEWS',
    'GR071:Makeleio Web Tv',
    'GR072:RELOAD RADIO TV',
    'GR073:HIGH TV',
    'GR074:Hpeiros TV1',
    'GR075:DIKTYO',
    'GR076:Axeloos TV',
    'GR077:Nova sport 1 SD',
    'GR078:Astra',
    'GR079:Mad FHD',
    'GR080:Rik Sat CY',
    'GR081:Montreal Greek TV',
    'GR082:NAT GEO Wild HD',
    'GR083:Nickelodeon HD',
    'GR084:Nova Premiere 6 FHD',
    'GR085:Nova Throne Season 1 HD',
    'GR086:Nova Throne Season 2 HD',
    'GR087:Nova Throne Season 3 HD',
    'GR088:Nova Throne Season 4 HD',
    'GR089:Nova Throne Season 5 HD',
    'GR090:Nova Throne Season 6 HD',
    'GR091:Nova Throne Season 7 HD',
    'GR092:Nova Throne Season 8 HD',
    'GR093:Nova Sport 2',
    'GR094:ERT 2 HD',
    'GR095:ERT 3 HD',
    'GR096:4E Star',
    'GR097:NOVA CINEMA 4 HD',
    'GR098:ERT PLAY HD',
    'GR099:ERT SPORTS WORLDWIDE',
    'GR100:ERT SPORTS HD',
    'GR101:RIK Sat',
    'GR102:Wixlar TV',
    'GR103:TV Kosmos',
    'GR104:GROOVY CY',
    'GR105:PAOK TV',
    'GR106:EPSILON TV',
    'GR107:FOX TV',
    'GR108:Explore Channel',
    'GR109:ERT PLAY 3 HD',
    'GR110:Mega Cosmos',
    'GR111:Rodopi TV',
    'GR112:BRT 1 (cyprus)',
    'GR113:BRT 2 (cyprus)',
    'GR114:Star Kentrikis Ellada',
    'GR115:Filopoli TV',
    'GR116:Irida TV',
    'GR117:BEST TV',
    'GR118:Hellas TV',
    'GR119:MPAXALO TV',
    'GR120:Aigaio TV',
    'GR121:ENA CHANNEL KAVALAS',
    'GR122:TRT Greek',
    'GR123:TV100',
    'GR124:PLP',
    'GR125:Euronews Greek',
    'GR126:CineFil',
    'GR127:CANNALI',
    'GR128:Nova Premiere 1 FHD',
    'GR129:Nova Premiere 2 FHD',
    'GR130:Nova Premiere 3 FHD',
    'GR131:Nova Premiere 4 FHD',
    'GR132:Kids1',
    'GR133:Tile Mousiki 2',
    'GR134:EOE Tv',
    'GR135:Discovery Channel',
    'GR136:CRETA TV',
    'GR137:KPHTI TV',
    'GR138:TV1 Siros',
    'GR139:NOVA CINEMA 3 HD',
    'GR140:XALASTRA TV',
    'GR141:NEO TV (EPSILON)',
    'GR142:Play Tv',
    'GR143:IONIAN TV',
    'GR144:NOVA CINEMA 2 HD',
    'GR145:FarosOnAir',
    'GR146:ZOUGLA TV',
    'GR147:Melody Channel HD',
    'GR148:Delta TV',
    'GR149:NRG TV',
    'GR150:GREEK VOICE',
    'GR151:Tile Musiki',
    'GR152:Thraki Net Tv',
    'GR153:TileSport',
    'GR154:Plus TV CY',
    'GR155:LYCHNOS',
    'GR156:Agio Nicolaos',
    'GR157:Open Beyond HD',
    'GR158:Attica Tv',
    'GR159:Axelwos TV °',
    'GR160:Discovery ID',
    'GR161:Discovery ShowCase',
    'GR162:4E TV',
    'GR163:EXTRA',
    'GR164:KPHTH TV (Krhth) °',
    'GR165:NOVA CINEMA 1 HD',
    'GR166:M.tv (Makedonia TV)',
    'GR167:MESSINIA TV',
    'GR168:NETV TORONTO °',
    'GR169:Nova Sport 3 ( live only at match)',
    'GR170:Nova Sport 4 ( live only at match)',
    'GR171:Nova Sport 5 (Live only on match)',
    'GR172:OTE SPORT 1',
    'GR173:OTE SPORT 2',
    'GR174:OTE SPORT 3',
    'GR175:OTE SPORT 4',
    'GR176:OTE SPORT 5',
    'GR177:OTE SPORT 6',
    'GR178:OTE SPORT 7',
    'GR179:OTE CINEMA 1',
    'GR180:OTE CINEMA 2',
    'GR181:OTE CINEMA 3',
    'GR182:OTE Cinema 4',
    'GR185:Netflix Premiere 1',
    'GR186:Netflix Premiere 2',
    'GR187:Netflix Premiere 3',
    'GR189:Netflix Premiere 4',
    'GR190:NetFlix Premiere 5',
    'GR196:NetFlix Premiere 11',
    'GR191:NetFlix Premiere 6',
    'GR195:NetFlix Premiere 10',
    'GR192:NetFlix Premiere 7',
    'GR193:NetFlix Premiere 9',
    'GR194:NetFlix Premiere 8',
    ]

    const hu = ['HU001:Sport 2 CZE/HU',
    'HU002:Balaton',
    'HU003:Sport 1 CZE/HU',
    'HU004:Sport 1',
    'HU005:DIGI SPORT 3',
    'HU006:DIGI SPORT 2',
    'HU007:DIGI SPORT 1',
    'HU008:1 Music',
    'HU009:2 Channel',
    'HU010:AMC',
    'HU011:ANIMAL PLANET',
    'HU012:ATV',
    'HU013:Auto Motor Sport',
    'HU014:AXN',
    'HU015:AXN Black',
    'HU016:AXN CZ/HU',
    'HU017:Viasat 6',
    'HU018:B92',
    'HU019:Boomerang',
    'HU020:Cartoon Network',
    'HU021:CBS Reality',
    'HU022:Cinemax',
    'HU023:Cinemax 2',
    'HU024:Bonum TV',
    'HU025:Cool TV',
    'HU026:Budapest Európa Televízió',
    'HU027:Dunaújváros Televízió',
    'HU028:Digi Animal World HD',
    'HU029:DIGI Film',
    'HU030:Erdely',
    'HU031:Digi Sport 3 HD',
    'HU032:Fehérvár TV',
    'HU033:H!T Music Channel',
    'HU034:Disney Channel',
    'HU035:DTX',
    'HU036:Duck TV',
    'HU037:DUNA FHD',
    'HU038:Duna World HD',
    'HU039:Kiwi TV',
    'HU040:EUROSPORT 1',
    'HU041:EUROSPORT 2',
    'HU042:Extreme Sports',
    'HU043:Kapos TV',
    'HU044:FEM 3',
    'HU045:Film 1',
    'HU046:Film Cafe',
    'HU047:Lóverseny közvetítés',
    'HU048:TV2 HD',
    'HU049:Pannon RTV',
    'HU050:StreamSport',
    'HU051:FILMBOX PREMIUM',
    'HU052:Fix HD',
    'HU053:Tatai TV',
    'HU054:Galaxy 4',
    'HU055:Happy Channel',
    'HU056:HBO 1',
    'HU057:HBO 2 HD',
    'HU058:HBO 3',
    'HU059:Viasat 3',
    'HU060:Hir TV',
    'HU061:HISTORY',
    'HU062:Ózdi Városi TV',
    'HU063:Humor',
    'HU064:ID HD',
    'HU065:Jednotka',
    'HU066:JimJam TV',
    'HU067:Budapest',
    'HU068:Mozi',
    'HU069:M1 HD',
    'HU070:M2 HD',
    'HU071:Viasat History',
    'HU072:M4',
    'HU073:M5',
    'HU074:Megamax',
    'HU075:Minimax',
    'HU076:M4 Sport',
    'HU077:MTV EU',
    'HU078:Music Channel',
    'HU079:Muzsika TV',
    'HU080:NAT GEO HD',
    'HU081:NAT GEO Wild HD',
    'HU082:Nickelodeon',
    'HU083:Mozi',
    'HU084:AXN White',
    'HU085:Nova Cinema',
    'HU086:Paramount Channel',
    'HU087:Prima Cool',
    'HU088:Prima Love',
    'HU089:Prima TV',
    'HU090:Prime',
    'HU091:RTL',
    'HU092:Rtl klub',
    'HU093:Chili TV',
    'HU094:Sorozat',
    'HU095:Spektrum HD',
    'HU096:SPEKTRUM HOME',
    'HU097:Spiler TV',
    'HU098:Sport 1 FHD',
    'HU099:Sport 2 FHD',
    'HU100:Story 4',
    'HU101:Super TV 2',
    'HU102:TA3',
    'HU103:TLC',
    'HU104:Travel Channel',
    'HU105:TV Barrandov',
    'HU106:TV Doma',
    'HU107:TV JOJ',
    'HU108:TV Nova',
    'HU109:TV Paprika',
    ]

    const no = ['NO001:C MORE FIRST HD',
    'NO002:TV2 Livsstil',
    'NO003:TV2 Norge',
    'NO004:TV2 Zebra',
    'NO005:NRK 2',
    'NO006:Disney Channel HD',
    'NO007:MAX NORWAY',
    'NO008:BBC Earth HD',
    'NO009:tv2 bornholm',
    'NO010:TV6',
    'NO011:Nickelodeon Junior',
    'NO012:NRK 1 HD',
    'NO013:FEM',
    'NO014:NRK 3',
    'NO015:TV10 Norge',
    'NO016:TV2 Humor',
    'NO017:Disney XD',
    'NO018:Discovery Channel',
    'NO019:TV2 Nyhetskanalen',
    'NO020:VOX',
    'NO021:Viasat Action',
    'NO022:VIASAT FOTBOLL HD',
    'NO023:VIASAT GOLF',
    'NO024:Viasat Motor',
    ]

    const ro = ['RO001:VIASAT NATURE',
    'RO002:VIASAT EXPLORER',
    'RO003:U TV',
    'RO004:TVR 2',
    'RO005:TVR 1',
    'RO006:TV 1000',
    'RO007:Zu TV',
    'RO008:KANAL D',
    'RO009:TeleMoldovaPlus',
    'RO010:Taraf Tv',
    'RO011:Sport.ro',
    'RO012:Romania Tv',
    'RO013:Realtaea TV',
    'RO014:Realitatea Tv',
    'RO015:VIASAT EXPLORER',
    'RO016:Pro Cinema',
    'RO017:prima cool',
    'RO018:Prima',
    'RO019:Paramount Channel',
    'RO020:TV1000',
    'RO021:NATIONAL Geo wild',
    'RO022:TVR International',
    'RO023:Music Channe hu',
    'RO024:Minimax',
    'RO025:Look Plus',
    'RO026:Kiss',
    'RO027:Kanal D',
    'RO028:HISTORI CHANNEL',
    'RO029:HBO Romania',
    'RO030:HBO 3',
    'RO031:HBO 2',
    'RO032:Happy',
    'RO033:FISHING & HUNTING',
    'RO034:EUROSPORT 2',
    'RO035:EUROSPORT 1',
    'RO036:Etno Tv',
    'RO037:DISNEY JUNIOR',
    'RO038:Digi24',
    'RO039:DIGI WORLD',
    'RO040:Digi Sport 4',
    'RO041:Digi Sport 3',
    'RO042:Digi Sport 2',
    'RO043:Digi Sport 1',
    'RO044:Digi Life',
    'RO045:DIGI FILM',
    'RO046:DIGI ANIMAL WORLD',
    'RO047:DIGI 24 CRAIOVA',
    'RO048:DIGI 24',
    'RO049:CINEMAX 2',
    'RO050:B1 TV',
    'RO051:B1',
    'RO052:AXN WHITE',
    'RO053:AXN BLACK',
    'RO054:AXN',
    'RO055:ANTENA STARS',
    'RO056:AGRO TV',
    'RO057:ACASA TV',
    'RO058:MegaMax-HD',
    'RO059:DOKU TV ADRIA',
    'RO060:PRO TV',
    'RO061:Alfa Omega',
    'RO062:Antena 1 HD',
    'RO063:Antena 3 HD',
    'RO064:Agro TV',
    'RO065:AMC',
    'RO066:ANIMAL PLANET HD',
    'RO067:Antena 1 HD',
    'RO068:Antena Stars HD',
    'RO069:PRO CINEMA',
    'RO070:AXN BLACK',
    'RO071:AXN White HD',
    'RO072:B1 HD',
    'RO073:Kiss TV',
    'RO074:Boomerang',
    'RO075:Happy Channel',
    'RO076:Cinemax 2 HD',
    'RO077:Cinemax HD',
    'RO078:Digi 24 HD',
    'RO079:Digi ANIMAL WORLD HD',
    'RO080:Digi Film NOW HD',
    'RO081:Digi Life',
    'RO082:Digi Sport 1 FHD',
    'RO083:Digi Sport 3 HD',
    'RO084:Viasat Nature',
    'RO085:Digi WORLD HD',
    'RO086:Discovery Channel',
    'RO087:Discovery Science HD',
    'RO088:Disney Junior',
    'RO089:TVR 2 HD',
    'RO090:Etno HD',
    'RO091:EUROSPORT 1 HD',
    'RO092:EUROSPORT 2 FHD',
    'RO093:ANTENA INTERNATIONAL',
    'RO094:Film Cafe',
    'RO095:Film Now',
    'RO096:Look Sport',
    'RO097:HAPPY CHANNEL HD',
    'RO098:HBO 2 HD',
    'RO099:HBO 3 HD',
    'RO100:HBO HD',
    'RO101:History Channel',
    'RO102:Kanal D HD',
    'RO103:KISS TV HD',
    'RO104:Look Plus HD',
    'RO105:MegaMax HD',
    'RO106:Minimax',
    'RO107:MTV Dance',
    'RO108:Music 1 Channel',
    'RO109:NAT GEO Wild HD',
    'RO110:National TV',
    'RO111:Neptun TV',
    'RO112:Nickelodeon HD',
    'RO113:Paramount Channel',
    'RO114:Look Tv',
    'RO115:Prima Tv',
    'RO116:PRO 2 (ACASA TV)',
    'RO117:Pro Cinema HD',
    'RO118:PRO TV',
    'RO119:PRO X HD',
    'RO120:Romania TV',
    'RO121:Taraf HD',
    'RO122:TELEKOM SPORT 1 FHD',
    'RO123:TELEKOM SPORT 3 FHD',
    'RO124:TELEKOM SPORT 4 FHD',
    'RO125:TLC',
    'RO126:TNT',
    'RO127:Travel Mix',
    'RO128:TRINITAS TV',
    'RO129:TV 1000 HD',
    'RO130:TV5 Monde',
    'RO131:TVR 1 HD',
    ]

    const hr = ['HR001:RTL KOCKICA (HR) °',
    'HR002:Arena Sport 2 (HR) °',
    'HR003:Arena Sport 3 (HR) °',
    'HR004:Arena Sport 4 (HR) °',
    'HR005:Arena Sport 5 (HR)',
    'HR006:Arena Sport 6 (HR)',
    'HR007:Sport Klub 1 (HR)',
    'HR008:Sport Klub 2 (HR)',
    'HR009:Sport Klub 3 (HR)',
    'HR010:24 KITCHEN (HR)',
    'HR011:ANIMAL PLANET (HR)',
    'HR012:BANOVINA TV (HR))',
    'HR013:CAPITAL (HR)',
    'HR014:DOMA TV (HR)',
    'HR015:HBO (HR)',
    'HR016:HBO 2 (HR)',
    'HR017:HR – Arena Sport 1 FHD',
    'HR018:HRT 1 (HR))',
    'HR019:HRT 2 (HR))',
    'HR020:HRT 3 (HR))',
    'HR021:HRT 4 (HR))',
    'HR022:KLASIK (HR)',
    'HR023:NATIONAL GEOGRAPHIC (HR)',
    'HR024:Z1 (HR)',
    'HR025:NOVA TV (HR))',
    'HR026:RTL LIVING (HR)',
    'HR027:RTL 1 (HR))',
    'HR028:RTL 2 (HR))',
    'HR029:RTL CRIME (HR)',
    ]

    const yu = ['YU001:CINEMAX 1',
    'YU002:CINEMAX-2',
    'YU003:DOMA-TV',
    'YU004:HBO 3',
    'YU005:HISTORY CHANNEL',
    'YU006:HRT 2',
    'YU007:RTL 2',
    'YU008:Z1',
    'YU009:Happy tv',
    'YU010:HRT 4',
    'YU011:HBO 2',
    'YU012:BHT',
    'YU013:ANIMAL PLANET',
    'YU014:PINK 3(1)',
    'YU015:HBO Adria',
    'YU016:Cinestar Premier 2',
    'YU017:Cinestar Premiere 1',
    'YU018:BN SAT',
    'YU019:BN',
    'YU020:HRT 3',
    'YU021:Eurosport 1',
    'YU022:Eurosport 2',
    'YU023:FOX',
    'YU024:FACE TV',
    'YU025:Discovery',
    'YU026:RTL',
    'YU027:FilmBox Extra',
    'YU028:Fightbox',
    'YU029:Fox Crime',
    'YU030:Fox Life',
    'YU031:Federalna TV',
    'YU032:Al Jazeera Balkan',
    'YU033:GRAND TV',
    'YU034:HAYAT',
    'YU035:HAYAT FOLK',
    'YU036:HAYAT PLUS',
    'YU037:Fox Movies',
    'YU038:BHT H',
    'YU039:KCN 1',
    'YU040:KCN 2',
    'YU041:KCN 3',
    'YU042:HRT 1',
    'YU043:BN Music',
    'YU044:LOV I RIBOLOV',
    'YU045:Viasat nature',
    'YU046:KLASIK TV',
    'YU047:Cinestar Action',
    'YU048:AXN Adria',
    'YU049:MRT 2',
    'YU050:MRTV 3 MK',
    'YU051:MRT 1 (local)',
    'YU052:CMC',
    'YU053:Mini TV HR',
    'YU054:Mini TV',
    'YU055:MTV Igman',
    'YU056:DM Sat',
    'YU057:Sportska TV',
    'YU058:National Geographic',
    'YU059:Nickelodeon',
    'YU060:NOVA RS pub',
    'YU061:NOVA TV HR',
    'YU062:OBN',
    'YU063:Pink & Roll',
    'YU064:Pink 1',
    'YU065:Pink 2',
    'YU066:PINK 3',
    'YU067:Pink Action',
    'YU068:Pink BH',
    'YU069:Pink Comedy',
    'YU070:Pink Crime & Mistery',
    'YU071:Pink Crime & Mystery',
    'YU072:Pink Extra',
    'YU073:Pink Film',
    'YU074:Pink Folk',
    'YU075:Pink Folk 2',
    'YU076:Pink Hits 2',
    'YU077:Pink Horror',
    'YU078:Pink Kids',
    'YU079:Pink Koncert',
    'YU080:Pink Kuvar',
    'YU081:Pink M',
    'YU082:Pink Movies',
    'YU083:Pink Music',
    'YU084:Pink Music 2',
    'YU085:Pink Pedia',
    'YU086:Pink Plus',
    'YU087:Pink Premium',
    'YU088:Pink Reality',
    'YU089:Pink Romance',
    'YU090:Pink',
    'YU091:Pink Sci-Fi&Fantasy',
    'YU092:Pink Serije',
    'YU093:Pink Show',
    'YU094:Pink Soap',
    'YU095:Pink Super Kids',
    'YU096:Pink Thriller',
    'YU097:Pink Western',
    'YU098:Pink World',
    'YU099:Pink Zabava',
    'YU100:Prva',
    'YU101:Prva Plus',
    'YU102:RTS 1 (local)',
    'YU103:RTS 2 (local)',
    'YU104:RTS 3',
    'YU105:RTS HD',
    'YU106:RTV BANOVINA',
    'YU107:RTV Zenica',
    'YU108:Sport Klub 1',
    'YU109:Sport Klub 2',
    'YU110:Sport Klub 3',
    'YU111:SPORTKLUB 4 SD',
    'YU112:SPORTKLUB 5 SD',
    'YU113:SPORTKLUB 6 SD',
    'YU114:N1 Bosna',
    'YU115:Nat Geo Wild',
    'YU116:24 KITCHEN',
    'YU117:Pink Media',
    'YU118:Al Jazeera Balkans',
    'YU119:POP OTO',
    'YU120:RTCG SAT',
    'YU121:Planet sport 1 HD',
    'YU122:Pop Brio',
    'YU123:ANIMAL PLANET HD',
    'YU124:MINIMAX',
    'YU125:JUGOTON TV',
    'YU126:AXN HD',
    'YU127:AXN SPIN',
    'YU128:B 92',
    'YU129:Belle Amie',
    'YU130:Balkan Film',
    'YU131:Planet sport 2 HD',
    'YU132:VIASAT HISTORY',
    'YU133:BHT 1',
    'YU134:Banovina TV',
    'YU135:BHT HD',
    'YU136:BN',
    'YU137:BN Music',
    'YU138:BN SAT',
    'YU139:Planet Sport 3 HD',
    'YU140:CINESTAR TV',
    'YU141:CineMax 1',
    'YU142:CINEMAX 2 HD',
    'YU143:Cinestar Action & Thriller',
    'YU144:Cinestar Premier 1',
    'YU145:Cinestar Premier 2',
    'YU146:CINESTAR TV HD',
    'YU147:CMC HD',
    'YU148:TV HRAM',
    'YU149:Crime & Investigation HD',
    'YU150:Da Vinci Learning',
    'YU151:Discovery Channel',
    'YU152:Discovery Science',
    'YU153:DOMA TV',
    'YU154:DIVA',
    'YU155:DM Sat',
    'YU156:RTCG',
    'YU157:Domatv HD',
    'YU158:RTCG 1',
    'YU159:E! HD',
    'YU160:EPIC DRAMA',
    'YU161:EUROSPORT 1 HD',
    'YU162:EUROSPORT 2 HD',
    'YU163:Face TV',
    'YU164:Federalna TV',
    'YU165:Fight box FHD',
    'YU166:Fight Channel',
    'YU167:FILM BOX Extra',
    'YU168:Film box Plus',
    'YU169:Fox Crime HD',
    'YU170:Fox HD',
    'YU171:Fox Life HD',
    'YU172:Fox Movies HD',
    'YU173:Glas Drine',
    'YU174:GRAND 2 TV',
    'YU175:Grand TV',
    'YU176:Happy Parovi',
    'YU177:Hema TV',
    'YU178:Happy TV HD',
    'YU179:HISTORY CHANNEL',
    'YU180:B92',
    'YU181:Hayat HD',
    'YU182:HAYAT PLUS',
    'YU183:Hayatovci',
    'YU184:HBO 1 HD',
    'YU185:HBO 2 HD',
    'YU186:HBO 3 HD',
    'YU187:HBO family',
    'YU188:TVSA Sarajevo',
    'YU189:ARENA SPORT 1 SRB',
    'YU190:ARENA SPORT 2 SRB',
    'YU191:ARENA SPORT 3 SRB',
    'YU192:ARENA SPORT 4 SRB',
    'YU193:ARENA SPORT 5 SRB',
    'YU194:HRT 1 HD',
    'YU195:HRT 2 HD',
    'YU196:HRT 3 HD',
    'YU197:Posavina TV',
    'YU198:IDJ TV',
    'YU199:Investigation Discovery',
    'YU200:Istok TV',
    'YU201:Izvorna TV',
    'YU202:Jugoton TV',
    'YU203:KCN 1',
    'YU204:KCN 2',
    'YU205:Tv5',
    'YU206:Klasik TV',
    'YU207:KREATOR TV',
    'YU208:LOV I RIBOLOV HD',
    'YU209:M1 Film',
    'YU210:M1 Gold',
    'YU211:Mini TV',
    'YU212:ARENA SPORT 1 HR',
    'YU213:ARENA SPORT 2 HR',
    'YU214:ARENA SPORT 3 HR',
    'YU215:ARENA SPORT 4 HR',
    'YU216:ARENA SPORT 5 HR',
    'YU217:MTV',
    'YU218:MTV DANCE',
    'YU219:mtv Igman',
    'YU220:Music TOP',
    'YU221:N1',
    'YU222:NAT GEO HD',
    'YU223:NAT GEO Wild HD',
    'YU224:Nickelodon',
    'YU225:PINK FOLK',
    'YU226:PINK FOLK 2',
    'YU227:O2 TV',
    'YU228:OBN HD',
    'YU229:OSM TV',
    'YU230:OTV Valentino',
    'YU231:PICKBOX 1',
    'YU232:PICKBOX 2',
    'YU233:PICKBOX 3',
    'YU234:Pikaboo',
    'YU235:Pink Crime & Mistery',
    'YU236:Pink Kids',
    'YU237:Pink Movies',
    'YU238:Pink Pedia',
    'YU239:Prva Max',
    'YU240:Prva Plus',
    'YU241:Prva World',
    'YU242:PRVA.RS',
    'YU243:PTC 1 HD',
    'YU244:PTC 2 HD',
    'YU245:VAVOOM KIDS',
    'YU246:PTPC',
    'YU247:PTPC Plus',
    'YU248:PTV',
    'YU249:Repiza 2',
    'YU250:Roma TV',
    'YU251:RT Vojvodina 1',
    'YU252:RTL 2',
    'YU253:RTL Cocica',
    'YU254:RTL CRIME',
    'YU255:RTL Living',
    'YU256:RTL PASSION',
    'YU257:Arena Sport 1 HD (SR)',
    'YU258:RTS 1',
    'YU259:RTS 2 FHD',
    'YU260:RTS 3',
    'YU261:RTV Novi Pazar',
    'YU262:Arena Sport 2 (SR)',
    'YU263:Arena Sport 3 HD (SR)',
    'YU264:Sandzak TV',
    'YU265:Pink Sci-Fi & Fantasy',
    'YU266:Sevdah',
    'YU267:Shutel TV',
    'YU268:Sitel 2',
    'YU269:Sitel 3 HD',
    'YU270:Sitel HD',
    'YU271:SLAVONSKA TV',
    'YU272:Slovenia TV 1 HD',
    'YU273:Sport Klub 8',
    'YU274:Sport Klub 2',
    'YU275:Sport Klub 3',
    'YU276:Sport Klub 4',
    'YU277:Sport Klub 5 HD',
    'YU278:Sport Klub HD',
    'YU279:SPORT KLUB 6',
    'YU280:Studio B',
    'YU281:super kids',
    'YU282:Sport Klub 7',
    'YU283:Telma',
    'YU284:TLC',
    'YU285:TOP Sound',
    'YU286:Travel Channel',
    'YU287:TK TUZLA',
    'YU288:TV 1',
    'YU289:TV 5',
    'YU290:TV 6',
    'YU291:TV 1000',
    'YU292:TV Banovina',
    'YU293:TV Glas Drine',
    'YU294:Arena Sport 4 HD (SR)',
    'YU295:TV Sehara',
    'YU296:TV Slon',
    'YU297:TV Sonce',
    'YU298:Arena Sport 5 (SR)',
    'YU299:USK HD',
    ]

    const mk = ['MK001:HBO 2 HD',
    'MK002:HBO HD',
    'MK003:HBO 3 HD',
    'MK004:Hugo 2',
    'MK005:Leskovac TV',
    'MK006:MEGA TV Bitola',
    'MK007:Telma',
    'MK008:NASA TV',
    'MK009:Sitel 3',
    'MK010:Televizija 5 HD °',
    'MK011:TBXYRO 2',
    'MK012:Sandzak TV',
    'MK013:SUTEL TV',
    'MK014:Sky Folk',
    'MK015:TV M3 Music',
    'MK016:Sitel HD',
    'MK017:24 Vesti',
    'MK018:ALFA HD',
    'MK019:Alsat M',
    'MK020:Planeta TV',
    'MK021:Mlava TV',
    'MK022:TV NOVA',
    'MK023:Shenja Tv',
    'MK024:MTV Igman',
    'MK025:Kanal 5 HD',
    'MK026:KANAL 5 Plus',
    'MK027:Kumanovo TV',
    'MK028:MAGIC TV',
    'MK029:MRT 1',
    'MK030:MRT 2',
    'MK031:MRT 3',
    'MK032:MRT Sobraniski',
    'MK033:NASHA TV',
    'MK034:Klan',
    'MK035:RTV 21 HD',
    'MK036:Shutel TV',
    'MK037:SITEL 2',
    ]

    const se = ['SE001:Kanal 11',
    'SE002:Kanal 9',
    'SE003:Viasat Hockey HD',
    'SE004:TV10',
    'SE005:TV3 HD',
    'SE006:TV4 HD',
    'SE007:VH1 Europe/Nick Jr',
    'SE008:Viasat Golf HD',
    'SE009:TV4 Fakta XL',
    'SE010:TV 6',
    'SE011:TV 4 Komedi',
    'SE012:TV 4 Guld',
    'SE013:TV 4 Film',
    'SE014:TV 4',
    'SE015:TV 3',
    'SE016:TV 12',
    'SE017:TV 10',
    'SE018:TV4 Fakta',
    'SE019:C More Golf HD ( SE )',
    'SE020:C More Emotion',
    'SE021:C More First',
    'SE022:C More Hits',
    'SE023:C More Hockey',
    'SE024:C More Series',
    'SE025:Comedy Central',
    'SE026:Discovery Channel',
    'SE027:Disney Channel',
    'SE028:Fox',
    'SE029:Kanal 5',
    'SE030:Kunskapskanalen',
    'SE031:National Geographic',
    'SE032:SVT1',
    'SE033:SVT2',
    'SE034:TCM',
    'SE035:TLC',
    'SE036:Travel Channel',
    'SE037:TV12',
    'SE038:TV4 Film',
    'SE039:TV6',
    'SE040:TV8',
    'SE041:Viasat 4',
    'SE042:Viasat Explore',
    'SE043:Viasat Film Action',
    'SE044:Viasat Film Family',
    'SE045:Viasat Film Hits',
    'SE046:Viasat Film Premiere',
    'SE047:Viasat History',
    'SE048:Viasat Motor',
    'SE049:Viasat Nature/Crime/Playboy',
    'SE050:Viasat Series',
    'SE051:C MORE SERIE',
    'SE052:C More Live 3 HD',
    'SE053:C More Live 4 HD',
    'SE054:C More Sport HD',
    'SE055:C More Sport FHD',
    'SE056:Disney Channel NOR',
    'SE057:EUROSPORT 2 FHD',
    'SE058:C More Hockey HD',
    'SE059:C More Golf HD',
    'SE060:Viasat Film Action',
    'SE061:Horse & Country TV',
    'SE062:Kanal 10 Norge',
    'SE063:Viasat Golf',
    'SE064:Teleclub Sport 1',
    'SE065:Teleclub Sport 2',
    'SE066:Sjuan 7',
    'SE067:STV24/BARNAKANEL',
    'SE068:kunskapskalen',
    'SE069:TV Sjuan',
    'SE070:SVT 1 HD',
    'SE071:SVT 2 HD',
    'SE072:TV7 Sjuan',
    'SE073:VIASAT EXPLORE',
    'SE074:Viasat Film Hits HD',
    'SE075:NAT GEO Wild HD',
    'SE076:Viasat Fotboll HD',
    'SE077:Viasat History',
    'SE078:Viasat Sport HD',
    'SE079:Viasat sport premium FHD',
    'SE080:SVT24/B',
    'SE081:SVT Kunskapskanalen',
    'SE082:TV3 Sport HD',
    'SE083:TV4 Sport',
    'SE084:EUROSPORT 1 FHD',
    'SE085:Kanal 10',
    'SE086:Cartoon Network',
    'SE087:Boomerang',
    'SE088:Disney XD',
    'SE089:Disney Junior',
    'SE090:Nick Jr',
    'SE091:Nickelodeon',
    'SE092:EuroSport 1 SE',
    'SE093:Oppna Kanalen Stockholm',
    'SE094:TLC HD',
    'SE095:DISCOVERY HD',
    'SE096:Discovery World',
    'SE097:DISNEY XD',
    'SE098:Disney Junior HD',
    'SE099:History HD',
    'SE100:MTV',
    'SE101:Animal Planet HD',
    'SE102:SF-Kanalen',
    'SE103:Investigation Discovery SE',
    'SE104:SF KANALEN',
    'SE105:C More Fotboll',
    'SE106:C More Stars',
    'SE107:C More Live HD',
    'SE108:C More Live 2 HD',
    ] 

    const ru = ['RUS001:Zoo Park',
    'RUS002:Xtream Sports',
    'RUS003:VIASAT SPORT EAST',
    'RUS004:TV1000 PREMIUM HD',
    'RUS005:TV1000 MEGAHIT HD',
    'RUS006:TV1000 COMEDY HD',
    'RUS007:tv1000',
    'RUS008:Friday HD',
    'RUS009:Sony Turbo',
    'RUS010:RUSsia League HD',
    'RUS011:RUSsia 1 HD',
    'RUS012:Premiera',
    'RUS013:National Geographic',
    'RUS014:Nashe Kino',
    'RUS015:Moya Planeta',
    'RUS016:Match Sports',
    'RUS017:Amedia 2',
    'RUS018:Amedia 1',
    'RUS019:Animal Family HD',
    'RUS020:Auto Plus',
    'RUS021:AZ Idman',
    'RUS022:BOLLYWOOD TV HD',
    'RUS023:DISCOVERY CHANNEL HD',
    'RUS024:EUREKA HD',
    'RUS025:HTB HD',
    'RUS026:Match! Arena',
    'RUS027:MTV',
    'RUS028:MUSICBOX UA',
    'RUS029:REN TV',
    'RUS030:Match Sports',
    'RUS031:SONY',
    'RUS032:SONY SCI-FI',
    'RUS033:MY PLANET',
    'RUS034:VIASAT HISTORY',
    'RUS035:АВТО 24',
    'RUS036:Animal Planet HD',
    'RUS037:Boks TV HD',
    'RUS038:Illusion',
    'RUS039:CTC',
    'RUS040:DISCOVERY SHOWCASE HD',
    'RUS041:Discovery ID HD',
    'RUS042:Discovery Science HD',
    'RUS043:Disney Channel HD',
    'RUS044:Drive',
    'RUS045:DTX',
    'RUS046:Euro News HD',
    'RUS047:Europa Plus TV',
    'RUS048:Eurosport 2 HD',
    'RUS049:Eurosport HD',
    'RUS050:Extreme Sports',
    'RUS051:FINE LIVING HD',
    'RUS052:FOOD NETWORK HD',
    'RUS053:FOX HD',
    'RUS054:FOX LIFE HD',
    'RUS055:FUTBOL 3 HD',
    'RUS056:HD Media 3D',
    'RUS057:History HD',
    'RUS058:Gulli Girl FHD',
    'RUS059:KHL TV HD',
    'RUS060:Kino Dom',
    'RUS061:Kino Hit HD',
    'RUS062:Kino Cinema HD',
    'RUS063:Kino Mix HD',
    'RUS064:LIFE HD',
    'RUS065:M Television',
    'RUS066:Match! Apeha HD',
    'RUS067:Match! HD',
    'RUS068:Match! Planet',
    'RUS069:Impact',
    'RUS070:MIR HD',
    'RUS071:Moscow 24',
    'RUS072:BRIDGE TV DANCE',
    'RUS073:MTV Live HD',
    'RUS074:Multimania',
    'RUS075:Music Box HD',
    'RUS076:Nashe Kino',
    'RUS077:Nash Futbol HD',
    'RUS078:NAT GEO HD',
    'RUS079:NAT GEO Wild HD',
    'RUS080:TB3',
    'RUS081:NICK Junior HD',
    'RUS082:Nickelodeon HD',
    'RUS083:NTV HD',
    'RUS084:MIR 24',
    'RUS085:Our sport',
    'RUS086:Outdoor Channel HD',
    'RUS087:PARAMOUNT CHANNEL HD',
    'RUS088:PARAMOUNT COMEDY HD',
    'RUS089:KINO Klub HD',
    'RUS090:RTG HD',
    'RUS091:Komediynyy FHD',
    'RUS092:RTRS',
    'RUS093:SONY TB HD',
    'RUS094:SOYUZ',
    'RUS095:Sport 1 UA',
    'RUS096:TLC HD',
    'RUS097:TNT HD',
    'RUS098:Travel Adventure',
    'RUS099:Travel Channel HD',
    'RUS100:TV1000 ACTION HD',
    'RUS101:TV1000 PREMIERE HD',
    'RUS102:VH1 Europe',
    'RUS103:VIASAT EXPLORE HD',
    'RUS104:VIP Premium',
    'RUS105:World HD',
    'RUS106:Match Premier',
    'RUS107:World Fashion HD',
    'RUS108:Box TV',
    'RUS109:112 UA',
    'RUS110:1Music Channel Hungary',
    'RUS111:ONE BY',
    'RUS112:2×2 2',
    'RUS113:43 HD',
    'RUS114:Avto plius',
    'RUS115:Akudji HD',
    'RUS116:Brodilo HD',
    'RUS117:CHP Info',
    'RUS118:Dream TV',
    'RUS119:Efir-24',
    'RUS120:Euronews RUSsian HD',
    'RUS121:Kino TV HD',
    'RUS122:Gorizont TV UA',
    'RUS123:Gromads’ke',
    'RUS124:ID KINO CLUB',
    'RUS125:Impact',
    'RUS126:Inter',
    'RUS127:K1',
    'RUS128:Kaledoskop',
    'RUS129:DOM KINO',
    'RUS130:DOM KINO PREMIUM',
    'RUS131:Mir 24',
    'RUS132:Mir Belogor’ya',
    'RUS133:MostVideo HD',
    'RUS134:MuzSoyuz',
    'RUS135:Nadiya',
    'RUS136:Nano TV',
    'RUS137:NTS (Sevastopol’)',
    'RUS138:OneBY',
    'RUS139:Rada',
    'RUS140:RBK.',
    'RUS141:CTC LOVE',
    'RUS142:RTI HD',
    'RUS143:RUSSIA 1 HD',
    'RUS144:RUSsian Music Box',
    'RUS145:Shanson.TV',
    'RUS146:Shopping Live',
    'RUS147:STV (Stavropol’)',
    'RUS148:NTV Mir',
    'RUS149:TochkaTV',
    'RUS150:RTDocumentary HD',
    'RUS151:Zee TV',
    'RUS152:ULTRAHD CINEMA',
    'RUS153:TV1000 Action RUS',
    'RUS154:NTV VREMYA',
    'RUS155:PERVIY METEO',
    'RUS156:YUTV (Cheboksary)',
    'RUS157:Zvezda',
    ]

    const fi = ['FI001:FEM',
    'FI002:Jim',
    'FI003:MTV 3 HD',
    'FI004:Nelonen',
    'FI005:Sub.',
    'FI006:TV7 Plus!',
    'FI007:Yle 1 FHD',
    'FI008:Yle 2 FHD',
    'FI009:YLE TV 1',
    'FI010:YLE TV 2',
    'FI011:C More MAX HD',
    'FI012:C More Sport 1 FHD',
    'FI013:Discovery World',
    'FI014:Investigation Discovery',
    'FI015:LIV',
    'FI016:MTV 3 HD',
    'FI017:C More Juniori',
    'FI018:Nelonen',
    'FI019:C More Sport 2',
    'FI020:Disney XD',
    'FI021:Viasat Series',
    'FI022:SF-Kanalen',
    'FI023:TV7',
    'FI024:BBC Brit',
    'FI025:Discovery Channel',
    'FI026:Disney Channel',
    'FI027:Disney Junior',
    ]

    const si = ['SI001:A KANAL HD',
    'SI002:TV 3',
    'SI003:SPORTKLUB GOLF',
    'SI004:SPORTKLUB 5',
    'SI005:SPORTKLUB 6',
    'SI006:Discovery Channel',
    'SI007:DIVA',
    'SI008:FOX CRIME',
    'SI009:FOX Movies',
    'SI010:MINIMAX',
    'SI011:PLANET 2 TV',
    'SI012:HBO',
    'SI013:HBO 2 HD',
    'SI014:HBO 3',
    'SI015:SLO 1 HD',
    'SI016:SLO 2 HD',
    'SI017:SLO 3',
    'SI018:VOYO',
    'SI019:NOVA 24 TV',
    'SI020:PLANET TV FHD',
    'SI021:POP BRIO HD',
    'SI022:POP KINO FHD',
    'SI023:POP OTO HD',
    'SI024:POP TV',
    'SI025:SI 1 HD',
    'SI026:SI 2 FHD',
    'SI027:SI 3 HD',
    'SI028:SPORT 2 HD',
    'SI029:SPORT KLUB 1 HD',
    'SI030:SPORT KLUB 3 HD',
    'SI031:SPORT KLUB 4 HD',
    'SI032:SPORT TV 1 HD',
    'SI033:SPORT TV 2 HD',
    'SI034:SPORT TV 3 HD',
    'SI035:NATIONAL GEO WILD',
    'SI036:NATIONAL GEOGRAPHIC',
    'SI037:TV Koper',
    'SI038:TRAVEL CHANNEL',
    'SI039:NICKELODEON',
    'SI040:VIASAT EXPLORE',
    'SI041:VOYO SIVENIJA',
    ]

    const br = ['BR001:A&E BR',
    'BR002:AMC BR',
    'BR003:Animal Planet BR',
    'BR004:Arte 1',
    'BR005:AXN BR',
    'BR006:Band BR',
    'BR007:Band News BR',
    'BR008:Band Sports',
    'BR009:VH1 BR',
    'BR010:BIS BR',
    'BR011:Boomerang BR',
    'BR012:Canal Sony',
    'BR013:Cartoon Network BR',
    'BR014:Cinemax BR',
    'BR015:Combate',
    'BR016:Comedy Central BR',
    'BR017:Baby TV',
    'BR018:Discovery BR',
    'BR019:Discovery Civilization',
    'BR020:Discovery Home Health',
    'BR021:Discovery Kids',
    'BR022:Discovery Science BR',
    'BR023:Discovery Theater',
    'BR024:Discovery Turbo',
    'BR025:Discovery WORLD',
    'BR026:Disney BR',
    'BR027:DISNEY JR BR',
    'BR028:Disney XD BR',
    'BR029:E! BR',
    'BR030:ESPN Extra',
    'BR031:ESPN BRASIL',
    'BR032:WOOHOO',
    'BR033:ESPN',
    'BR034:PFC',
    'BR035:VIVA BR',
    'BR036:TV Record',
    'BR037:Food Network BR',
    'BR038:Fox BR',
    'BR039:Fox Life',
    'BR040:Fox Permium 1',
    'BR041:Fox Premium 2',
    'BR042:Fox Sports 2 BR',
    'BR043:Fox Sports 1',
    'BR044:FX BR',
    'BR045:Globo News BR',
    'BR046:GLOBO RBS TV PORTO ALEGRE',
    'BR047:Globo RJ',
    'BR048:Globo BR',
    'BR049:Gloobinho',
    'BR050:GNT BR',
    'BR051:H2 BR',
    'BR052:HBO 2 BR',
    'BR053:HBO Family BR',
    'BR054:HBO BR',
    'BR055:HBO Plus BR',
    'BR056:HBO Signature BR',
    'BR057:History BR',
    'BR058:ID BR',
    'BR059:Lifetime BR',
    'BR060:Mais Globosat',
    'BR061:Max',
    'BR062:Max Prime',
    'BR063:Max Up',
    'BR064:MegaPix',
    'BR065:MTV BR',
    'BR066:Multishow',
    'BR067:Music Box',
    'BR068:NAT GEO BR',
    'BR069:NAT GEO Kids BR',
    'BR070:NAT GEO Wild BR',
    'BR071:NICK JR BR',
    'BR072:Nickelodeon BR',
    'BR073:OFF',
    'BR074:Paramount BR',
    'BR075:Premiere 2',
    'BR076:Premiere 3',
    'BR077:Premiere 4',
    'BR078:Premiere 5',
    'BR079:Premiere 6',
    'BR080:Premiere 7',
    'BR081:Premiere Clubes',
    'BR082:Warner Channel',
    'BR083:Record',
    'BR084:Rede TV',
    'BR085:SBT',
    'BR086:Space BR',
    'BR087:Sport TV 2',
    'BR088:Sport TV 3',
    'BR089:Sport TV 1',
    'BR090:Studio Universal',
    'BR091:SYFY BR',
    'BR092:TBS BR',
    'BR093:Telecine Action',
    'BR094:Telecine Cult',
    'BR095:Telecine Fun',
    'BR096:Telecine Pipoca',
    'BR097:Telecine Premium',
    'BR098:Telecine Touch',
    'BR099:TLC BR',
    'BR100:TNT BR',
    'BR101:TNT Series BR',
    'BR102:TV Ra Tim Bum',
    'BR103:Universal BR',
    ]

    const la = ['LA001:A&E LA',
    'LA002:AMC LA',
    'LA003:Animal Planet LA',
    'LA004:AXN LA',
    'LA005:UFC Network',
    'LA006:Az Click',
    'LA007:Azteca 13',
    'LA008:Azteca 7',
    'LA009:Azteca Cinema',
    'LA010:Azteca Mundo',
    'LA011:Azteca Noticias',
    'LA012:Bandamax',
    'LA013:Boomerang',
    'LA014:Canal 11',
    'LA015:Canal 5',
    'LA016:Canal De Las Estrellas',
    'LA017:Caracol',
    'LA018:Carton Network',
    'LA019:CDF Premuim',
    'LA020:Cine Canal',
    'LA021:Cine Latino',
    'LA022:Cine Max',
    'LA023:Claro Sports',
    'LA024:CNN en Espagnol',
    'LA025:Comedy Central',
    'LA026:De Pelicula',
    'LA027:Discovery Home Health LA',
    'LA028:Discovery LA',
    'LA029:Discovery Civilization',
    'LA030:Discovery ID LA',
    'LA031:Discovery Kids',
    'LA032:Discovery Science LA',
    'LA033:Discovery Teather',
    'LA034:Discovery TLC',
    'LA035:Discovery Turbo',
    'LA036:Universal',
    'LA037:Disney LA',
    'LA038:Disney Junior LA',
    'LA039:Disney XD LA',
    'LA040:Distrito Comedia',
    'LA041:DXTV',
    'LA042:E! LA',
    'LA043:Bloomberg LA',
    'LA044:EL Gourmet',
    'LA045:ESPN LA',
    'LA046:ESPN 2',
    'LA047:ESPN 3',
    'LA048:Film And Arts',
    'LA049:Film Zone',
    'LA050:Univision',
    'LA051:Fox Series',
    'LA052:Fox Action',
    'LA053:Fox Cinema',
    'LA054:Fox Classic',
    'LA055:Fox LA',
    'LA056:Fox Life',
    'LA057:Fox Movies',
    'LA058:Fox Sports 1',
    'LA059:Fox Sports 2',
    'LA060:Fox Sports 3',
    'LA061:FX',
    'LA062:Warner',
    'LA063:Glitz',
    'LA064:Golden Edge',
    'LA065:Golden',
    'LA066:H2 LA',
    'LA067:HBO LA',
    'LA068:HBO 2 LA',
    'LA069:HBO Family LA',
    'LA070:HBO Signature LA',
    'LA071:History LA',
    'LA072:HOLA TV',
    'LA073:I-SAT',
    'LA074:ID LA',
    'LA075:Lifetime LA',
    'LA076:MI Musica',
    'LA077:Win Sports',
    'LA078:MTV LA',
    'LA079:MTV Hits LA',
    'LA080:FXM',
    'LA081:NAT GEO Wild LA',
    'LA082:NAT GEO LA',
    'LA083:Nick JR LA',
    'LA084:Nicktoons LA',
    'LA085:Nick LA',
    'LA086:SONY',
    'LA087:Space LA',
    'LA088:Studio Universal',
    'LA089:SYFY LA',
    'LA090:TBS',
    'LA091:TCM',
    'LA092:Unicable',
    'LA093:Tele Hit',
    'LA094:Telemundo',
    'LA095:Telemundo Int',
    'LA096:Canal Disney',
    'LA097:Tele Visa',
    'LA098:Paramount',
    'LA099:TLC LA',
    'LA100:TLnovelas',
    'LA101:TNT',
    'LA102:TNT Series',
    'LA103:Tooncast',
    'LA104:UNIMAS',
    'LA105:Tru TV',
    'LA106:Marti',
    'LA107:TVE',
    'LA109:La voz de maria',
    'LA113:ACTION MAX',
    'LA118:El Salvador',
    'LA126:DW America',
    'LA135:AZ MAS',
    'LA165:CANAL ONCE',
    'LA168:CANAL DE LAS ESTRELLAS HD',
    'LA180:Cinemoi',
    'LA199:Cinema 30 PPV',
    'LA234:CINEMA PLUS',
    'LA235:Cinemax Action HD',
    'LA245:CNN',
    'LA247:CNN ESPANOL',
    'LA260:Cubavision (Cuba)',
    'LA265:DHE',
    'LA267:Directv Sports',
    'LA269:Directv Sports 2',
    'LA280:Nick 2 FHD',
    'LA299:EL TRECE HD',
    'LA304:ESPN PLUS HD',
    'LA305:ETC TV',
    'LA310:HCH SD HON',
    'LA318:PFC',
    'LA323:FOX NEWS',
    'LA324:Fox Premium Action HD',
    'LA354:HBO Plus FHD',
    'LA355:HBO Plus West HD',
    'LA356:HBO East HD',
    'LA376:TELE MUSICA',
    'LA390:TV Globo Internacional',
    'LA404:MAX UP',
    'LA410:Milenio TV HD',
    'LA416:MoviePlex FHD',
    'LA423:Multimedios HD',
    'LA424:Music Top HD',
    'LA426:TELEUNIVERSO',
    'LA431:TV Quisqueya',
    'LA468:Bolivia TV',
    'LA473:Todo Noticias',
    'LA489:RCN Novelas HD',
    'LA503:RetroPlex FHD',
    'LA521:Showtime East FHD',
    'LA522:SHOWTIME FHD',
    'LA531:Starz Cinema FHD',
    'LA532:Starz Comedy FHD',
    'LA534:Starz Encore Action FHD',
    'LA535:Starz Encore Black FHD',
    'LA536:Starz Encore Classic FHD',
    'LA537:Starz Encore Family FHD',
    'LA538:Starz Encore FHD',
    'LA539:Starz Encore Suspense FHD',
    'LA540:Starz Encore Western FHD',
    'LA541:Starz Family HD',
    'LA542:Starz FHD',
    'LA543:Starz Kids & Family FHD',
    'LA544:Starz West FHD',
    'LA560:TELEFE HD',
    'LA566:Telemundo 51',
    'LA600:Galavision',
    'LA606:TV MAS',
    'LA611:Telemundo Boston HD',
    'LA633:UniMas West',
    'LA651:TIGO SPORT',
    'LA652:ULTRA Film',
    'LA659:Telemundo Chicago HD',
    'LA662:Univision New York HD',
    ]

    const arg = ['ARG001:TN HD',
    'ARG002:24/7 Noticias',
    'ARG003:AMERICA 24 HD',
    'ARG004:ARGENTINISIMA',
    'ARG005:ATB TV',
    'ARG006:C5N HD',
    'ARG007:CADENA SUDESTE',
    'ARG008:TeleSur',
    'ARG009:CANAL 3',
    'ARG010:TelePin (T-HD)',
    'ARG011:CANAL 4 HD',
    'ARG012:CANAL 9 HD',
    'ARG013:Canal 9 Salta',
    'ARG014:TeleMax (TLX)',
    'ARG015:CINEAR',
    'ARG016:CANALDELAMUSICA',
    'ARG017:Canal 13',
    'ARG018:CANAL 21 HD',
    'ARG019:CANAL 26 HD',
    'ARG020:Canal 26 Noticias HD',
    'ARG021:CANAL DE LA CIUDAD',
    'ARG022:AL SHAHED TV',
    'ARG023:I-SAT',
    'ARG024:CINE AR HD',
    'ARG025:CINE ARGENTINA',
    'ARG026:ZOOMOO',
    'ARG027:CN 24/7',
    'ARG028:CN23 HD',
    'ARG029:WARNER',
    'ARG030:CRONICA HD',
    'ARG031:Cronica Television HD',
    'ARG032:DeporTV FHD',
    'ARG033:El Trece',
    'ARG034:Canal 26 HD °',
    'ARG035:VOLVER',
    'ARG036:VH1 MEGAHITS HD',
    'ARG037:VH1',
    'ARG038:TeleFe',
    'ARG039:El Garaje TV',
    'ARG040:UNIVERSAL',
    'ARG041:El Rural HD',
    'ARG042:El Trece Internacional',
    'ARG043:TRUTV HD',
    'ARG044:Encuentro HD',
    'ARG045:ESPN 2 HD',
    'ARG046:ESPN 3 HD',
    'ARG047:ESPN HD',
    'ARG048:ESPN',
    'ARG049:FOX SPORTS HD',
    'ARG050:FOX SPORTS Premium HD',
    'ARG051:Garage TV',
    'ARG052:GOL TV HD',
    'ARG053:LitusTV',
    'ARG054:Espn arg',
    'ARG055:TOONCAST HD',
    'ARG056:LN',
    'ARG057:Multivision',
    'ARG058:MUSIC TOP',
    'ARG059:Net TV FHD',
    'ARG060:Pakapaka HD',
    'ARG061:Provincial TV',
    'ARG062:FOX Sports 1 HD',
    'ARG063:Telemax HD',
    'ARG064:TNT SERIES HD',
    'ARG065:TNT HD',
    'ARG066:Orbe 21',
    'ARG067:TNT Sports HD',
    'ARG068:TIERRAMIA TV HD',
    'ARG069:QUIERO MUSICA HD',
    'ARG070:PARAMOUNT',
    'ARG071:TV CIUDAD',
    'ARG072:Tv Publica HD',
    'ARG073:FOX Sports 3 HD',
    'ARG074:TyC Sports FHD',
    'ARG075:VIVO 4',
    'ARG076:America TV',
    'ARG077:FOX Sports 2 HD',
    ]

    const co = ['CO001:Mundo Mas TV',
    'CO002:TeleEnvigado',
    'CO003:CARACOL',
    'CO004:AMC HD',
    'CO005:Canal Tro',
    'CO006:Canal Trece',
    'CO007:WAO',
    'CO008:Uniautonoma Television',
    'CO009:Top Latino',
    'CO010:Cable Noticias',
    'CO011:DirectTV Sports Plus',
    'CO012:Win Sports HD',
    'CO013:Teleislas TV',
    'CO014:Cablenoticias 24 HD',
    'CO015:Cali TV',
    'CO016:Canal Capital HD',
    'CO017:CANAL DE LAS ESTRELLAS',
    'CO018:Caracol Institucional HD',
    'CO019:Canal Doce',
    'CO020:Canal Wow TV',
    'CO021:Canal Acuario',
    'CO022:RCN HD2',
    'CO023:Caracol International HD',
    'CO024:Teleantioquia HD',
    'CO025:CNC Pasto TV',
    'CO026:Miami TV',
    'CO027:Nacion TV NTV',
    'CO028:DirectTV Sports 1',
    'CO029:City Tv HD',
    'CO030:TeleCafe',
    'CO031:Tele Vid HD',
    'CO032:Tele Musica',
    'CO033:Tele Amiga',
    'CO034:Nacion TV NTV',
    'CO035:Miami Tv Colombia FHD',
    'CO036:CNC Pasto TV',
    'CO037:Canal CNC Medellin',
    'CO038:Cantinazo',
    'CO039:Cosmovision',
    'CO040:Canal Acuario',
    'CO041:Telemax HD',
    'CO042:Canal Institucional',
    'CO043:Caracol',
    'CO044:Tvgro',
    'CO045:Canal Uno HD',
    'CO046:TelePacificoTelePacifico TV',
    'CO047:Televid',
    'CO048:Teleislas',
    'CO049:Teleantiquioa',
    'CO050:Teleamiga',
    'CO051:Canal RCN International',
    'CO052:Carolina TV HD',
    'CO053:Suram',
    'CO054:Oasis',
    'CO055:El Tiempo HD',
    'CO056:Amordiscos',
    'CO057:Religious',
    'CO058:Avivamiento',
    'CO059:CTV Barranquilla',
    'CO060:Ntv Canal',
    'CO061:UAO Play +',
    'CO062:Telemedellin HD',
    'CO063:Melody TV HD',
    'CO064:Telecaribe FHD',
    'CO065:Telecaribe Deportes FHD',
    'CO066:Tele Antioquia HD',
    'CO067:Tele Cafe',
    'CO068:TELE ISLA',
    'CO069:Tele Max HD',
    ]

    const pe = ['PE001:Bethel TV Plus',
    'PE002:AMERICA TELEVISION',
    'PE003:AMERICA TV',
    'PE004:ANT TV',
    'PE005:Antares TV',
    'PE006:ATV HD',
    'PE007:ATV Plus',
    'PE008:ATV',
    'PE009:Cultura 24',
    'PE010:America TV HD',
    'PE011:Ctc Cusco',
    'PE012:Hipodromo Monterrico HD',
    'PE013:Canal IPE',
    'PE014:FRECUENCIA LATINA',
    'PE015:GOL PERU HD',
    'PE016:GOL TV',
    'PE017:Bethel tv',
    'PE018:La Tele',
    'PE019:LATINA',
    'PE020:Monterrico TV',
    'PE021:MoviStar Deportes HD',
    'PE022:MoviStar Plus TV',
    'PE023:Nex TV',
    'PE024:NEXT TV',
    'PE025:OVACION',
    'PE026:PANAMERICANA',
    'PE027:PERU MAGICO',
    'PE028:TV PERU NOTICIAS',
    'PE029:TV Noticias 7.3',
    'PE030:TV PERU HD',
    ]

    const mx = ['MX001:ADN 40',
    'MX002:NU9VE TV',
    'MX003:AYM Sports',
    'MX004:Az Corazon HD',
    'MX005:Azteca 7 HD',
    'MX006:Azteca Cinema FHD',
    'MX007:TP AFORE AZTECA',
    'MX008:Azteca Corazon',
    'MX009:Azteca HD',
    'MX010:PX Sports',
    'MX011:TP SENDERO',
    'MX012:Azteca undo',
    'MX013:CANAL1944',
    'MX014:Azteca Uno FHD',
    'MX015:Baby Tv',
    'MX016:Bandamax',
    'MX017:CANAL2089',
    'MX018:Canal 5 FHD',
    'MX019:CANAL2331',
    'MX020:CANAL2355',
    'MX021:CANAL401',
    'MX022:CANAL470',
    'MX023:VTV',
    'MX024:ANIMAL PLANET',
    'MX025:Canal Judicial FHD',
    'MX026:Canal Once HD',
    'MX027:CNN',
    'MX028:COMEDY CENTRAL HD',
    'MX029:DE PELICULA HD',
    'MX030:Discovery CHANNEL HD',
    'MX031:Discovery CIVILIZATION HD',
    'MX032:Discovery H&H HD',
    'MX033:Discovery TURBO HD',
    'MX034:Excelsior TV',
    'MX035:El Canal De Las Estrellas',
    'MX036:EL GOURMET HD',
    'MX037:ESPN 1',
    'MX038:ESPN 2 HD',
    'MX039:ESPN 3 HD',
    'MX040:A&E',
    'MX041:ESPN HD',
    'MX042:ESPN Plus',
    'MX043:ESPN U HD',
    'MX044:AL JAZZERA',
    'MX045:FILM & ART HD',
    'MX046:Foro TV FHD',
    'MX047:FOX HD',
    'MX048:Fox Life',
    'MX049:Fox Premium Action',
    'MX050:Fox Premium Cinema',
    'MX051:ANTENA3',
    'MX052:Fox Premium Family',
    'MX053:Fox Premium Movies',
    'MX054:Fox Premium Series',
    'MX055:FOX SERIES HD',
    'MX056:FOX SPORTS 1 HD',
    'MX057:FOX SPORTS 2 HD',
    'MX058:FOX SPORTS 3',
    'MX059:FXM HD',
    'MX060:AXN',
    'MX061:AZTECA 1',
    'MX062:GOLDEN EDGE HD',
    'MX063:GOLDEN HD',
    'MX064:HISTORY HD',
    'MX065:HOLA TV HD',
    'MX066:I CLASSIC HD',
    'MX067:Imagen TV FHD',
    'MX068:Ingenio Tv',
    'MX069:LAS ESTRELLAS HD',
    'MX070:Lifetime',
    'MX071:Mexiquense TV FHD',
    'MX072:Milenio Tv',
    'MX073:MULTIMEDIOS HD',
    'MX074:AZTECA CLICK',
    'MX075:Azteca Deportes',
    'MX076:NICK 2 HD',
    'MX077:NICK HD',
    'MX078:NICKTOONS',
    'MX079:Once Mexico',
    'MX080:BABY FIRST',
    'MX081:BBC WORLD NEWS',
    'MX082:PARAMOUNT HD',
    'MX083:BLOMMBERG',
    'MX084:BLOOMBERG',
    'MX085:BOOMERANG',
    'MX086:SONY HD',
    'MX087:SYFY HD',
    'MX088:CADEND TV',
    'MX089:CANAL 26',
    'MX090:Telehit Plus',
    'MX091:CANAL 4',
    'MX092:Televisa',
    'MX093:CANAL 7',
    'MX094:CANAL 8',
    'MX095:CANAL107',
    'MX096:Televisa Pruebla',
    'MX097:CANAL109',
    'MX098:CANAL1749',
    'MX099:TNT HD',
    'MX100:CANAL1899',
    'MX101:CANAL1932',
    'MX102:CANAL2062',
    'MX103:CANAL2278',
    'MX104:CANAL2319',
    'MX105:CANAL317',
    'MX106:Unicable FHD',
    ]

    const car = ['CAR001:TTEN- Trinidad | HD',
    'CAR002:Flow Sports 1',
    'CAR003:RUSH Sports 1',
    'CAR004:RUSH Sports 2',
    'CAR005:RUSH Sports 3',
    'CAR006:BEBLACK CARIBBEAN',
    'CAR007:RUSH Sports 5',
    'CAR008:RUSH Sports 6',
    'CAR009:RUSH Sports EPL',
    'CAR010:TVJ Sports Network',
    'CAR011:ESPN',
    'CAR012:CaribVision | SD',
    'CAR013:ESPN 2',
    'CAR014:Fame Radio Live – Jamaica | SD',
    'CAR015:GBN (Grenada) | SD',
    'CAR016:GRENADA FAMILY NETWORK',
    'CAR017:CVTV',
    'CAR018:HOPE CHANNEL (PUERTO RICO) | HD',
    'CAR019:ISLAND LUCK TV (Bahamas) | HD',
    'CAR020:ISLAND TV (Haiti)',
    'CAR021:JNN – JAMAICA',
    'CAR022:MTM – Jamaica | HD',
    'CAR023:Mellow Tv (Jamaica) | SD',
    'CAR024:Nago TV',
    'CAR025:RTVC',
    'CAR026:RETV',
    'CAR027:PBC JAMAICA',
    'CAR028:WSVI TV',
    'CAR029:RETV – Jamaica | UHD',
    'CAR030:Opa tv (Haiti)',
    'CAR031:RTG18 (Haiti)',
    'CAR032:RTNH (Haiti)',
    'CAR033:RTVC CARAIBES (HAITI) | SD',
    'CAR034:SPORTSMAX 2 | HD',
    'CAR035:SPORTSMAX CRICKET',
    'CAR036:Sportsmax Plus | HD',
    'CAR037:Sportsmax | HD',
    'CAR038:TVJ',
    'CAR039:SUPER TV 55',
    'CAR040:TNT DSTV | SD',
    'CAR041:JNN',
    'CAR042:TNT Scream Fest | HD',
    'CAR043:NOS TV',
    'CAR044:3ABN',
    'CAR045:BASHMENT',
    'CAR046:HOT 7 TV',
    'CAR047:TRIDENT 10 (Barbados)',
    'CAR048:TRINITY TV (Trinidad)',
    'CAR049:TVJ – Jamaica | HD',
    'CAR050:TVJ Sports – Jamaica | HD',
    'CAR051:BET Carabian',
    'CAR052:WEATHER HEADLINES',
    'CAR053:Business AccessTV',
    'CAR054:WSVI 8 (St. Croix) | HD',
    'CAR055:WSVI-TV 8 Weather (St. Croix) | SD',
    'CAR056:TVG28 GUYANA',
    'CAR057:ZNSTV 13 – BAHAMAS | SD',
    'CAR058:BET Gospel',
    ]

    const ns = ['NS001:AL Arabiya',
    'NS002:AL Hadath News',
    'NS003:AL Jazeera Arabic',
    'NS004:AL Jazeera Mubasher',
    'NS005:AL Ghad TV',
    'NS006:BBC Arabic',
    'NS007:CNBC Arabiya',
    'NS008:DW Arabic',
    'NS009:Sky News Arabic',
    'NS010:France24',
    'NS011:Palestine News',
    'NS012:RT Arabic',
    'NS013:Saudi EL Ekhbaria',
    'NS014:Saudi EL Eqtisadiah',
    'NS015:Sky News Arabic',
    'NS016:Echorouk News',
    'NS017:Dzair News',
    'NS018:NUmidia TV News',
    'NS019:AL Sharqiya News',
    'NS020:Orient News',
    'NS021:Syria Ikhbariya News',
    'NS022:Libya News',
    'NS023:Nile News',
    ]

    const ks = ['KS001:Ajyal TV',
    'KS002:Cartoon Network',
    'KS003:Karameesh',
    'KS004:Koky TV',
    'KS005:Majid Kids',
    'KS006:Mickey Channel',
    'KS007:Mody Kids',
    'KS008:Nour Kids',
    'KS009:SAT7 Kids',
    'KS010:SemSem',
    'KS011:Space Toon',
    'KS012:Taha',
    'KS013:Toyor AL Janna',
    'KS014:Toyor Baby',
    ]

    const bn = ['BN001:BeIN Sport News',
    'BN002:BeIN Sport 01',
    'BN003:BeIN Sport 02',
    'BN004:BeIN Sport 03',
    'BN005:BeIN Sport 04',
    'BN006:BeIN Sport 05',
    'BN007:BeIN Sport 06',
    'BN008:BeIN Sport 07',
    'BN009:BeIN Sport 08',
    'BN010:BeIN Sport 09',
    'BN011:BeIN Sport 10',
    'BN012:BeIN Sport 11',
    'BN013:BeIN Sport 12',
    'BN014:BeIN Movies 1',
    'BN015:BeIN Movies 2',
    'BN016:BeIN Movies 3',
    'BN017:BeIN Movies 4',
    'BN018:bein 4k',
    'BN019:Bein Sport 14',
    'BN020:BeIN BARAEM',
    'BN021:BeIN My Cinema',
    'BN022:Bein Sport 15',
    'BN023:Bein Sport',
    'BN024:BeIN Junior',
    'BN025:BeIN Groummet',
    'BN026:BeIN Series',
    'BN027:BeIN FOX Movie',
    ]

    const mbc = ['MBC001:MBC 1',
    'MBC002:MBC 2',
    'MBC003:MBC 3',
    'MBC004:MBC 4',
    'MBC005:ACTION',
    'MBC006:Bollywood',
    'MBC007:Drama',
    'MBC008:Drama Plus',
    'MBC009:MASR 1',
    'MBC010:MASR 2',
    'MBC011:MAX',
    'MBC012:Variety',
    ]

    const jp = ['JP001:NHK-総合',
    'JP002:NHK-Eテレ',
    'JP003:日テレ',
    'JP004:テレビ朝日',
    'JP005:TBS',
    'JP006:テレビ東京',
    'JP007:フジテレビ',
    'JP008:TOKYOMX',
    'JP009:NHK総合大阪',
    'JP010:NHKEテレ大阪',
    'JP011:MBS毎日放送',
    'JP012:ABCテレビ.',
    'JP013:テレビ大阪',
    'JP014:関西テレビ',
    'JP015:読売テレビ',
    'JP016:NHKBS1',
    'JP017:NHKBSプレミア',
    'JP018:BS日テレ',
    'JP019:BS朝日1',
    'JP020:BS-TBS',
    'JP021:BSジャパン',
    'JP022:BSフジ.181',
    'JP023:WOWOWプライム.',
    'JP024:WOWOWライブ',
    'JP025:WOWOWシネマ',
    'JP026:スターチャンネル 1',
    'JP027:グリーンチャン',
    'JP028:日本映画専門',
    'JP029:ディズニーチャ',
    'JP030:東映チャンネル',
    'JP031:衛星劇場',
    'JP032:時代劇専門',
    'JP033:ファミリー劇場',
    'JP034:sky.Aスポーツ',
    'JP035:Jsports4',
    'JP036:日テレG',
    'JP037:ゴルフネットHD',
    'JP038:Jsports2',
    'JP039:Jsports3',
    'JP040:キッズステーシ',
    ]

    const cor = ['KOR001:KBS 1',
    'KOR002:KBS 2',
    'KOR003:MBC',
    'KOR004:SBS',
    'KOR005:TV조선',
    'KOR006:MBC Sports',
    'KOR007:TVN',
    'KOR008:Supper Action',
    'KOR009:CTS',
    'KOR010:Ariran Korea',
    'KOR011:JTBC',
    'KOR012:Tomato TV',
    'KOR013:OCN영화',
    'KOR014:CGV영화',
    'KOR015:MBN',
    'KOR016:Catch On 1',
    'KOR017:Disney어린이 XXX',
    'KOR018:CBS',
    'KOR019:EBS 1',
    'KOR020:EBS 2',
    'KOR021:Golf골프 XXX',
    'KOR022:EBS Kids',
    'KOR023:MNet',
    ]
  return (
    
    <>
        <Head>
            <title>IPTV Streaming - USA - Premium Channels</title>
            <meta name="description" content="Elevate your entertainment with IPTV Streaming, the leading provider in the USA. Gain access to an extensive array 
              of premium channels for a rich and immersive viewing experience" />
           <link rel="icon" href="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/logo.ico"  type="image/x-icon"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="generator" content="Next.js" />
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content="IPTV Streaming: The Best Provider in USA - Premium Channels"/>
            <meta property="og:description" content="Elevate your entertainment with IPTV Streaming, the leading provider in the USA. Gain access to an extensive array 
              of premium channels for a rich and immersive viewing experience"/>
           <meta name="keywords" content="4k iptv, 4k iptv service, IPTV Streaming, IPTV Streaming 4k, cozi channell, iptv smart4k cozi channell "/>
            
            <meta property="og:url" content="https://www.iptv-streaming-4k.com"/>
            <meta property="og:site_name" content="IPTV Streaming 4k"/>
            <meta property="og:image" content="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/ogusa.PNG"/>
            </Head>

        <div>
        <h1 style={{display : "none"}}>cozi channel</h1>
            <div className={`${styles.menbackgound}`}></div>

          <section className={`container-fluid pt-5 pb-2 ${styles.section1}`}>
              <h1 className="pt-5  mt-3 text-center mb-4">Channels List</h1>
              
              <div className="accordion accordion-flush" id="accordionFlushExample">

                
                        <div className={`accordion-item ${styles.accordionBtn}`}>
                          <h2 className="accordion-header">
                            <button
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
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

                        <div className={`accordion-item ${styles.accordionBtn}`}>
                          <h2 className="accordion-header">
                            <button
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse18"
                              aria-expanded="false"
                              aria-controls="flush-collapse18"
                            >
                              <strong>PL:——|CINEMA|————————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse18"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    plCinema.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse19"
                              aria-expanded="false"
                              aria-controls="flush-collapse19"
                            >
                              <strong>PL:——|NEWS|—————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse19"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    plNews.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse20"
                              aria-expanded="false"
                              aria-controls="flush-collapse20"
                            >
                              <strong>PL:——|KIDS|—————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse20"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    plKids.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse21"
                              aria-expanded="false"
                              aria-controls="flush-collapse21"
                            >
                              <strong>PL:——|SPORT|————————————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse21"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    plSport.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse22"
                              aria-expanded="false"
                              aria-controls="flush-collapse22"
                            >
                              <strong>PL:——|ENTERTAINMENT|——————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse22"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    plEnter.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse23"
                              aria-expanded="false"
                              aria-controls="flush-collapse23"
                            >
                              <strong>AL:——|ENTERTAINMENT|——————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse23"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    alEnter.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse24"
                              aria-expanded="false"
                              aria-controls="flush-collapse24"
                            >
                              <strong>AL:——|SPORT|————————————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse24"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    alSport.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse25"
                              aria-expanded="false"
                              aria-controls="flush-collapse25"
                            >
                              <strong>AL:——|CINEMA|————————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse25"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    alCinema.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse26"
                              aria-expanded="false"
                              aria-controls="flush-collapse26"
                            >
                              <strong>AL:——|DOCUMENTARY|——————————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse26"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    alDocum.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse27"
                              aria-expanded="false"
                              aria-controls="flush-collapse27"
                            >
                              <strong>AL:——|NEWS|—————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse27"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    alNews.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse28"
                              aria-expanded="false"
                              aria-controls="flush-collapse28"
                            >
                              <strong>AL:——|KIDS|—————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse28"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    alKids.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse29"
                              aria-expanded="false"
                              aria-controls="flush-collapse29"
                            >
                              <strong>NL:—–|GENERAL|————————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse29"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    nlGeneral.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse30"
                              aria-expanded="false"
                              aria-controls="flush-collapse30"
                            >
                              <strong>NL:—–|SPORTS|————————————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse30"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    nlSport.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse31"
                              aria-expanded="false"
                              aria-controls="flush-collapse31"
                            >
                              <strong>NL:—–|MOVIES|————————————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse31"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    nlMovie.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse32"
                              aria-expanded="false"
                              aria-controls="flush-collapse32"
                            >
                              <strong>NL:—–|KIDS|—————————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse32"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    nlKids.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse33"
                              aria-expanded="false"
                              aria-controls="flush-collapse33"
                            >
                              <strong>NL:—–|DOCUMENTARY|———————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse33"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    nlDocum.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse34"
                              aria-expanded="false"
                              aria-controls="flush-collapse34"
                            >
                              <strong>DE:—–|NEWS|———————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse34"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    deNews.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse35"
                              aria-expanded="false"
                              aria-controls="flush-collapse35"
                            >
                              <strong>DE:—–|DOCUMENTARY|—————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse35"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    deDocum.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse36"
                              aria-expanded="false"
                              aria-controls="flush-collapse36"
                            >
                              <strong>DE:—–|CINEMA|——————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse36"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    deCinema.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse37"
                              aria-expanded="false"
                              aria-controls="flush-collapse37"
                            >
                              <strong>DE:—–|KIDS|———————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse37"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    deKids.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse38"
                              aria-expanded="false"
                              aria-controls="flush-collapse38"
                            >
                              <strong>DE:—–|SPORT|———————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse38"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    deSport.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse39"
                              aria-expanded="false"
                              aria-controls="flush-collapse39"
                            >
                              <strong>DE:—–|ENTERTAINMENT|————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse39"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    deEnter.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse39"
                              aria-expanded="false"
                              aria-controls="flush-collapse39"
                            >
                              <strong>DE:—–|ENTERTAINMENT|————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse39"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    deEnter.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse40"
                              aria-expanded="false"
                              aria-controls="flush-collapse40"
                            >
                              <strong>PT:—–|GENERAL|————————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse40"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ptGeneral.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse41"
                              aria-expanded="false"
                              aria-controls="flush-collapse41"
                            >
                              <strong>PT:—–|MOVIES|————————————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse41"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ptMovie.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse42"
                              aria-expanded="false"
                              aria-controls="flush-collapse42"
                            >
                              <strong>PT:—–|DOCUMENTARY|———————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse42"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ptDoum.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse43"
                              aria-expanded="false"
                              aria-controls="flush-collapse43"
                            >
                              <strong>PT:—–|SPORTS|————————————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse43"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ptSport.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse44"
                              aria-expanded="false"
                              aria-controls="flush-collapse44"
                            >
                              <strong>PT:—–|KIDS|—————————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse44"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ptKids.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse45"
                              aria-expanded="false"
                              aria-controls="flush-collapse45"
                            >
                              <strong>IT:—–|GENERAL|————————————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse45"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    itGeneral.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse46"
                              aria-expanded="false"
                              aria-controls="flush-collapse46"
                            >
                              <strong>IT:—–|MOVIES|—————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse46"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    itMovies.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse47"
                              aria-expanded="false"
                              aria-controls="flush-collapse47"
                            >
                              <strong>IT:—–|INTRATENIMENTO|——————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse47"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    itIntra.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse48"
                              aria-expanded="false"
                              aria-controls="flush-collapse48"
                            >
                              <strong>IT:—–|SPORT|—————————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse48"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    itSport.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse49"
                              aria-expanded="false"
                              aria-controls="flush-collapse49"
                            >
                              <strong>IT:—–|CULTURA|————————————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse49"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    itCulture.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse50"
                              aria-expanded="false"
                              aria-controls="flush-collapse50"
                            >
                              <strong>IT:—–|KID|——————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse50"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    itKids.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse51"
                              aria-expanded="false"
                              aria-controls="flush-collapse51"
                            >
                              <strong>IT:—–|PREMIUM|————————————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse51"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    itPrem.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse52"
                              aria-expanded="false"
                              aria-controls="flush-collapse52"
                            >
                              <strong>UK:——|SPORT|—————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse52"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ukSport.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse53"
                              aria-expanded="false"
                              aria-controls="flush-collapse53"
                            >
                              <strong>UK:——|CINEMA|————————————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse53"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ukCine.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse54"
                              aria-expanded="false"
                              aria-controls="flush-collapse54"
                            >
                              <strong>UK:——|NEWS|—————————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse54"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ukNews.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse55"
                              aria-expanded="false"
                              aria-controls="flush-collapse55"
                            >
                              <strong>UK:——|KIDS|—————————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse55"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ukKids.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse56"
                              aria-expanded="false"
                              aria-controls="flush-collapse56"
                            >
                              <strong>UK:——|DOCUMENTARY|———————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse56"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ukDocum.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse57"
                              aria-expanded="false"
                              aria-controls="flush-collapse57"
                            >
                              <strong>UK:——|ENTERTAINMENT|——————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse57"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ukEnter.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse58"
                              aria-expanded="false"
                              aria-controls="flush-collapse58"
                            >
                              <strong>ES:—–|SPORTS|——————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse58"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    esSport.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse59"
                              aria-expanded="false"
                              aria-controls="flush-collapse59"
                            >
                              <strong>ES:—–|CINEMA|——————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse59"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    esCinema.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse60"
                              aria-expanded="false"
                              aria-controls="flush-collapse60"
                            >
                              <strong>ES:—–|Documentary|—————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse60"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    esDocum.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse61"
                              aria-expanded="false"
                              aria-controls="flush-collapse61"
                            >
                              <strong>ES:—–|CARTOO|——————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse61"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    esCarto.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse62"
                              aria-expanded="false"
                              aria-controls="flush-collapse62"
                            >
                              <strong>ES:—–|Espana|——————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse62"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    esEspana.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse63"
                              aria-expanded="false"
                              aria-controls="flush-collapse63"
                            >
                              <strong>FR:—–|SPORT|——————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse63"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    frSport.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse64"
                              aria-expanded="false"
                              aria-controls="flush-collapse64"
                            >
                              <strong>FR:—–|ENTERTAINMENT|———————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse64"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    frEnter.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse65"
                              aria-expanded="false"
                              aria-controls="flush-collapse65"
                            >
                              <strong>FR:—–|CINEMA|—————————–</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse65"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    frCinema.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse66"
                              aria-expanded="false"
                              aria-controls="flush-collapse66"
                            >
                              <strong>FR:—–|KIDS|——————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse66"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    frKids.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse67"
                              aria-expanded="false"
                              aria-controls="flush-collapse67"
                            >
                              <strong>FR:—–|NEWS|——————————-</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse67"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    frNews.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse68"
                              aria-expanded="false"
                              aria-controls="flush-collapse68"
                            >
                              <strong>BE:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse68"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    be.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse69"
                              aria-expanded="false"
                              aria-controls="flush-collapse69"
                            >
                              <strong>BG:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse69"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    bg.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse70"
                              aria-expanded="false"
                              aria-controls="flush-collapse70"
                            >
                              <strong>CH:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse70"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ch.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse71"
                              aria-expanded="false"
                              aria-controls="flush-collapse71"
                            >
                              <strong>CZ:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse71"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    cz.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse72"
                              aria-expanded="false"
                              aria-controls="flush-collapse72"
                            >
                              <strong>DK:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse72"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    dk.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse73"
                              aria-expanded="false"
                              aria-controls="flush-collapse73"
                            >
                              <strong>GR:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse73"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    gr.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse74"
                              aria-expanded="false"
                              aria-controls="flush-collapse74"
                            >
                              <strong>HU:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse74"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    hu.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse75"
                              aria-expanded="false"
                              aria-controls="flush-collapse75"
                            >
                              <strong>NO:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse75"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    no.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse76"
                              aria-expanded="false"
                              aria-controls="flush-collapse76"
                            >
                              <strong>RO:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse76"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ro.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse77"
                              aria-expanded="false"
                              aria-controls="flush-collapse77"
                            >
                              <strong>HR:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse77"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    hr.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse78"
                              aria-expanded="false"
                              aria-controls="flush-collapse78"
                            >
                              <strong>YU:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse78"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    yu.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse79"
                              aria-expanded="false"
                              aria-controls="flush-collapse79"
                            >
                              <strong>MK:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse79"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    mk.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse80"
                              aria-expanded="false"
                              aria-controls="flush-collapse80"
                            >
                              <strong>SE:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse80"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    se.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse81"
                              aria-expanded="false"
                              aria-controls="flush-collapse81"
                            >
                              <strong>RU:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse81"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ru.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse82"
                              aria-expanded="false"
                              aria-controls="flush-collapse82"
                            >
                              <strong>FI:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse82"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    fi.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse83"
                              aria-expanded="false"
                              aria-controls="flush-collapse83"
                            >
                              <strong>SI:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse83"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    si.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse84"
                              aria-expanded="false"
                              aria-controls="flush-collapse84"
                            >
                              <strong>BR:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse84"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    br.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse85"
                              aria-expanded="false"
                              aria-controls="flush-collapse85"
                            >
                              <strong>LA:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse85"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    la.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse86"
                              aria-expanded="false"
                              aria-controls="flush-collapse86"
                            >
                              <strong>ARG:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse86"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    arg.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse87"
                              aria-expanded="false"
                              aria-controls="flush-collapse87"
                            >
                              <strong>CO:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse87"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    co.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse88"
                              aria-expanded="false"
                              aria-controls="flush-collapse88"
                            >
                              <strong>PE:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse88"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    pe.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse89"
                              aria-expanded="false"
                              aria-controls="flush-collapse89"
                            >
                              <strong>MX:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse89"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    mx.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse90"
                              aria-expanded="false"
                              aria-controls="flush-collapse90"
                            >
                              <strong>CAR:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse90"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    car.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse91"
                              aria-expanded="false"
                              aria-controls="flush-collapse91"
                            >
                              <strong>NS:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse91"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ns.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse92"
                              aria-expanded="false"
                              aria-controls="flush-collapse92"
                            >
                              <strong>KS:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse92"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    ks.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse93"
                              aria-expanded="false"
                              aria-controls="flush-collapse93"
                            >
                              <strong>BN:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse93"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    bn.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse94"
                              aria-expanded="false"
                              aria-controls="flush-collapse94"
                            >
                              <strong>MBC:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse94"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    mbc.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse95"
                              aria-expanded="false"
                              aria-controls="flush-collapse95"
                            >
                              <strong>JP:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse95"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    jp.map((x)=>(
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
                              className={`accordion-button collapsed ${styles.accordionbtn}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapse96"
                              aria-expanded="false"
                              aria-controls="flush-collapse96"
                            >
                              <strong>COR:——————————————————</strong>
                            </button>
                          </h2>
                          <div
                            id="flush-collapse96"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              
                                  <ul className="mt-1">
                                    {
                                    cor.map((x)=>(
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
