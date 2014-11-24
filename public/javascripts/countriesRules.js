var countries = [
    { name: 'AFEGANISTAO', code: 93 },
    { name: 'AFRICA DO SUL', code: 28 },
    { name: 'ALASCA', code: 1 },
    { name: 'ALBANIA', code: 355 },
    { name: 'ALEMANHA', code: 49 },
    { name: 'ANDORRA', code: 376 },
    { name: 'ANGOLA', code: 244 },
    { name: 'ANGUILLA', code: 1 },
    { name: 'ANT.HOLANDESAS', code: 599 },
    { name: 'ANTIGUA', code: 1 },
    { name: 'ARABIA SAUDITA', code: 966 },
    { name: 'ARGELIA', code: 213 },
    { name: 'ARGENTINA', code: 54 },
    { name: 'ARMENIA', code: 374 },
    { name: 'ARUBA', code: 297 },
    { name: 'AUSTRALIA', code: 61 },
    { name: 'AUSTRIA', code: 43 },
    { name: 'AZERBAIJAO', code: 994 },
    { name: 'BAHAMAS', code: 1 },
    { name: 'BANGLADESH', code: 880 },
    { name: 'BARBADOS', code: 1 },
    { name: 'BAREIN', code: 973 },
    { name: 'BELARUS', code: 375 },
    { name: 'BELGICA', code: 32 },
    { name: 'BELIZE', code: 501 },
    { name: 'BENIN', code: 229 },
    { name: 'BERMUDAS', code: 1 },
    { name: 'BOLIVIA', code: 591 },
    { name: 'BOSNIA E HERZEGOVINA', code: 387 },
    { name: 'BOTSUANA', code: 267 },
    { name: 'BRASIL', code: 55 },
    { name: 'BRUNEI', code: 673 },
    { name: 'BULGARIA', code: 359 },
    { name: 'BURKINA FASO', code: 226 },
    { name: 'BURUNDI', code: 257 },
    { name: 'BUTAO', code: 975 },
    { name: 'CABO VERDE', code: 238 },
    { name: 'CAMAROES', code: 237 },
    { name: 'CAMPUCHEA', code: 855 },
    { name: 'CANADA', code: 1 },
    { name: 'CASAQUISTAO', code: 7 },
    { name: 'CATAR', code: 974 },
    { name: 'CAYMAN ILHAS', code: 1 },
    { name: 'CHADE', code: 235 },
    { name: 'CHILE', code: 56 },
    { name: 'CHINA', code: 86 },
    { name: 'CHIPRE', code: 357 },
    { name: 'CINGAPURA', code: 65 },
    { name: 'COLOMBIA', code: 57 },
    { name: 'CONGO', code: 242 },
    { name: 'COOK ILHAS', code: 682 },
    { name: 'COREIA DO SUL', code: 82 },
    { name: 'COSTA DO MARFIM', code: 225 },
    { name: 'COSTA RICA', code: 506 },
    { name: 'CROACIA', code: 385 },
    { name: 'CUBA', code: 53 },
    { name: 'DINAMARCA', code: 45 },
    { name: 'DJIBUTI', code: 253 },
    { name: 'DOMINICA', code: 1 },
    { name: 'DOMINICANA REPÚBLICA', code: 1 },
    { name: 'EGITO', code: 20 },
    { name: 'EL SALVADOR', code: 503 },
    { name: 'EMIRADOS A. UNIDOS', code: 971 },
    { name: 'EQUADOR', code: 593 },
    { name: 'ESLOVENIA', code: 386 },
    { name: 'ESPANHA', code: 34 },
    { name: 'ESTADOS UNIDOS', code: 1 },
    { name: 'ESTONIA', code: 372 },
    { name: 'ETIOPIA', code: 251 },
    { name: 'FAROE ILHAS', code: 298 },
    { name: 'FIJI', code: 679 },
    { name: 'FILIPINAS', code: 63 },
    { name: 'FINLANDIA', code: 358 },
    { name: 'FORMOSA', code: 886 },
    { name: 'FRANCA', code: 33 },
    { name: 'GABAO', code: 241 },
    { name: 'GAMBIA', code: 220 },
    { name: 'GANA', code: 233 },
    { name: 'GEORGIA', code: 995 },
    { name: 'GIBRALTAR', code: 350 },
    { name: 'GRANADA', code: 1 },
    { name: 'GRECIA', code: 30 },
    { name: 'GROENLANDIA', code: 299 },
    { name: 'GUADALUPE', code: 590 },
    { name: 'GUAM', code: 1 },
    { name: 'GUATEMALA', code: 502 },
    { name: 'GUIANA', code: 592 },
    { name: 'GUIANA FRANCESA', code: 594 },
    { name: 'GUINE', code: 224 },
    { name: 'GUINE-BISSAU', code: 245 },
    { name: 'HAITI', code: 509 },
    { name: 'HAVAI', code: 1 },
    { name: 'HOLANDA', code: 31 },
    { name: 'HONDURAS', code: 504 },
    { name: 'HONG KONG', code: 852 },
    { name: 'HUNGRIA', code: 36 },
    { name: 'IEMEN REPÚBLICA', code: 967 },
    { name: 'INDIA', code: 91 },
    { name: 'INDONESIA', code: 62 },
    { name: 'IRA', code: 98 },
    { name: 'IRAQUE', code: 964 },
    { name: 'IRLANDA', code: 353 },
    { name: 'ISLANDIA', code: 354 },
    { name: 'ISRAEL', code: 972 },
    { name: 'ITALIA', code: 39 },
    { name: 'JAMAICA', code: 1 },
    { name: 'JAPAO', code: 81 },
    { name: 'JORDANIA', code: 962 },
    { name: 'KIRIBATI', code: 686 },
    { name: 'KUWEIT', code: 965 },
    { name: 'LAOS', code: 856 },
    { name: 'LESOTO', code: 266 },
    { name: 'LETONIA', code: 371 },
    { name: 'LIBANO', code: 961 },
    { name: 'LIBERIA', code: 231 },
    { name: 'LIBIA', code: 218 },
    { name: 'LIECHTENSTEIN', code: 423 },
    { name: 'LITUANIA', code: 370 },
    { name: 'LUXEMBURGO', code: 352 },
    { name: 'MACAU', code: 853 },
    { name: 'MACEDONIA', code: 389 },
    { name: 'MADAGASCAR', code: 261 },
    { name: 'MALASIA', code: 60 },
    { name: 'MALAVI', code: 265 },
    { name: 'MALDIVAS', code: 960 },
    { name: 'MALI', code: 223 },
    { name: 'MALTA', code: 356 },
    { name: 'MALVINAS ILHAS', code: 500 },
    { name: 'MARIANAS NORTE ISL.', code: 1 },
    { name: 'MARROCOS', code: 212 },
    { name: 'MARTINICA', code: 596 },
    { name: 'MAURICIO', code: 230 },
    { name: 'MEXICO', code: 52 },
    { name: 'MOCAMBIQUE', code: 258 },
    { name: 'MOLDOVA', code: 373 },
    { name: 'MONTENEGRO', code: 382 },
    { name: 'MONTSERRAT', code: 1 },
    { name: 'NAMIBIA', code: 264 },
    { name: 'NAURU', code: 674 },
    { name: 'NEPAL', code: 977 },
    { name: 'NICARAGUA', code: 505 },
    { name: 'NIGERIA', code: 234 },
    { name: 'NORFOLK ILHA', code: 672 },
    { name: 'NORUEGA', code: 47 },
    { name: 'NOVA CALEDONIA', code: 687 },
    { name: 'NOVA ZELANDIA', code: 64 },
    { name: 'OMA', code: 968 },
    { name: 'PALESTINA', code: 970 },
    { name: 'PANAMA', code: 507 },
    { name: 'PAPUA NOVA GUINE', code: 675 },
    { name: 'PAQUISTAO', code: 92 },
    { name: 'PARAGUAI', code: 595 },
    { name: 'PERU', code: 51 },
    { name: 'POLONIA', code: 48 },
    { name: 'PORTO RICO', code: 1 },
    { name: 'PORTUGAL', code: 351 },
    { name: 'PRINCIPADO MONACO', code: 377 },
    { name: 'QUENIA', code: 254 },
    { name: 'QUIRGUIZIA', code: 996 },
    { name: 'REINO UNIDO', code: 44 },
    { name: 'REP.ESLOVAQUIA', code: 421 },
    { name: 'REP.TCHECA', code: 420 },
    { name: 'REUNIAO ILHAS', code: 262 },
    { name: 'RODRIGUES ILHAS', code: 854 },
    { name: 'ROMENIA', code: 40 },
    { name: 'RUSSIA', code: 7 },
    { name: 'SALOMAO ILHAS', code: 677 },
    { name: 'SAMOA', code: 685 },
    { name: 'SAMOA AMERICANA', code: 684 },
    { name: 'SANTA LUCIA', code: 1 },
    { name: 'SAO MARINO', code: 378 },
    { name: 'SAO TOME E PRINCIPE', code: 239 },
    { name: 'SENEGAL', code: 221 },
    { name: 'SERRA LEOA', code: 232 },
    { name: 'SÉRVIA', code: 381 },
    { name: 'SEYCHELLES', code: 248 },
    { name: 'SIRIA', code: 963 },
    { name: 'SOMALIA', code: 252 },
    { name: 'SRI-LANKA', code: 94 },
    { name: 'ST.PIERRE E MIQUELON', code: 508 },
    { name: 'STA HELENA ILHAS', code: 290 },
    { name: 'SUAZILANDIA', code: 268 },
    { name: 'SUDAO', code: 249 },
    { name: 'SUECIA', code: 46 },
    { name: 'SUICA', code: 41 },
    { name: 'SURINAME', code: 597 },
    { name: 'TADJIQUISTAO', code: 992 },
    { name: 'TAILANDIA', code: 66 },
    { name: 'TAITI', code: 689 },
    { name: 'TANZANIA', code: 255 },
    { name: 'TERRIT.EXT.AUSTRALIA', code: 672 },
    { name: 'TIMOR LESTE', code: 670 },
    { name: 'TOGO', code: 228 },
    { name: 'TONGA', code: 676 },
    { name: 'TRINIDAD E TOBAGO', code: 1 },
    { name: 'TUNISIA', code: 216 },
    { name: 'TURCOMENIA', code: 993 },
    { name: 'TURKS E CAICOS ILHAS', code: 1 },
    { name: 'TURQUIA', code: 90 },
    { name: 'UCRANIA', code: 380 },
    { name: 'UGANDA', code: 256 },
    { name: 'UNIAO DE MYANMAR', code: 95 },
    { name: 'URUGUAI', code: 598 },
    { name: 'UZBEQUISTAO', code: 998 },
    { name: 'VANUATU', code: 678 },
    { name: 'VENEZUELA', code: 58 },
    { name: 'VIETNA', code: 84 },
    { name: 'VIRGENS A. ILHAS', code: 1 },
    { name: 'VIRGENS B.ILHAS', code: 1 },
    { name: 'ZAIRE', code: 243 },
    { name: 'ZAMBIA', code: 260 },
    { name: 'ZANZIBAR', code: 259 },
    { name: 'ZIMBABUE', code: 263 }
];

var telRules = [
    //'AFEGANISTAO'	93
    { rule: [] , mask: [] },
    //'AFRICA DO SUL'	28
    { rule: [] , mask: [] },
    //'ALASCA'			1
    { rule: [] , mask: [] },
    //'ALBANIA'		355
    { rule: [] , mask: [] },
    //'ALEMANHA'		49
    { rule: [] , mask: [] },
    //'ANDORRA'		376
    { rule: [] , mask: [] },
    //'ANGOLA'			244
    { rule: [] , mask: [] },
    //'ANGUILLA'		1
    { rule: [] , mask: [] },
    //'ANT.HOLANDESAS'	599
    { rule: [] , mask: [] },
    //'ANTIGUA'		1
    { rule: [] , mask: [] },
    //'ARABIA SAUDITA' 966
    { rule: [] , mask: [] },
    //'ARGELIA'		213
    { rule: [] , mask: [] },
    //'ARGENTINA'		54
    { rule: [] , mask: [] },
    //'ARMENIA'		374
    { rule: [] , mask: [] },
    //'ARUBA'			297
    { rule: [] , mask: [] },
    //'AUSTRALIA'		61
    { rule: [] , mask: [] },
    //'AUSTRIA'		43
    { rule: [] , mask: [] },
    //'AZERBAIJAO'		994
    { rule: [] , mask: [] },
    //'BAHAMAS'		1
    { rule: [] , mask: [] },
    //'BANGLADESH'		880
    { rule: [] , mask: [] },
    //'BARBADOS'		1
    { rule: [] , mask: [] },
    //'BAREIN'			973
    { rule: [] , mask: [] },
    //'BELARUS'		375
    { rule: [] , mask: [] },
    //'BELGICA'		32
    { rule: [] , mask: [] },
    //'BELIZE'			501
    { rule: [] , mask: [] },
    //'BENIN'			229
    { rule: [] , mask: [] },
    //'BERMUDAS'		1
    { rule: [] , mask: [] },
    //'BOLIVIA'		591
    { rule: [] , mask: [] },
    //'BOSNIA E HERZEGOVINA'	387
    { rule: [] , mask: [] },
    //'BOTSUANA'		267
    { rule: [] , mask: [] },
    //'BRASIL'			55
    { rule: [ "^(\\(\\d{2,3}\\)|\\d{2,3}){1}[\\s]?\\d{4,5}-?\\d{4}$" ] , mask: [ "(##) ####-####", "(##) #####-####", "(##)####-####", "(##)#####-####" ] },
    //'BRUNEI'			673
    { rule: [] , mask: [] },
    //'BULGARIA'		359
    { rule: [] , mask: [] },
    //'BURKINA FASO'	226
    { rule: [] , mask: [] },
    //'BURUNDI'		257
    { rule: [] , mask: [] },
    //'BUTAO'			975
    { rule: [] , mask: [] },
    //'CABO VERDE'		238
    { rule: [] , mask: [] },
    //'CAMAROES'		237
    { rule: [] , mask: [] },
    //'CAMPUCHEA'		855
    { rule: [] , mask: [] },
    //'CANADA'			1
    { rule: [] , mask: [] },
    //'CASAQUISTAO'	7
    { rule: [] , mask: [] },
    //'CATAR'			974
    { rule: [] , mask: [] },
    //'CAYMAN ILHAS'	1
    { rule: [] , mask: [] },
    //'CHADE'			235
    { rule: [] , mask: [] },
    //'CHILE'			56
    { rule: [] , mask: [] },
    //'CHINA'			86
    { rule: [] , mask: [] },
    //'CHIPRE'			357
    { rule: [] , mask: [] },
    //'CINGAPURA'		65
    { rule: [] , mask: [] },
    //'COLOMBIA'		57
    { rule: [] , mask: [] },
    //'CONGO'			242
    { rule: [] , mask: [] },
    //'COOK ILHAS'		682
    { rule: [] , mask: [] },
    //'COREIA DO SUL'	82
    { rule: [] , mask: [] },
    //'COSTA DO MARFIM'	225
    { rule: [] , mask: [] },
    //'COSTA RICA'		506
    { rule: [] , mask: [] },
    //'CROACIA'		385
    { rule: [] , mask: [] },
    //'CUBA'			53
    { rule: [] , mask: [] },
    //'DINAMARCA'		45
    { rule: [] , mask: [] },
    //'DJIBUTI'		253
    { rule: [] , mask: [] },
    //'DOMINICA'		1
    { rule: [] , mask: [] },
    //'DOMINICANA REPÚBLICA'	1
    { rule: [] , mask: [] },
    //'EGITO'			20
    { rule: [] , mask: [] },
    //'EL SALVADOR'	503
    { rule: [] , mask: [] },
    //'EMIRADOS A. UNIDOS'	971
    { rule: [] , mask: [] },
    //'EQUADOR'		593
    { rule: [] , mask: [] },
    //'ESLOVENIA'		386
    { rule: [] , mask: [] },
    //'ESPANHA'		34
    { rule: [] , mask: [] },
    //'ESTADOS UNIDOS'	1
    { rule: [] , mask: [] },
    //'ESTONIA'		372
    { rule: [] , mask: [] },
    //'ETIOPIA'		251
    { rule: [] , mask: [] },
    //'FAROE ILHAS'	298
    { rule: [] , mask: [] },
    //'FIJI'			679
    { rule: [] , mask: [] },
    //'FILIPINAS'		63
    { rule: [] , mask: [] },
    //'FINLANDIA'		358
    { rule: [] , mask: [] },
    //'FORMOSA'		886
    { rule: [] , mask: [] },
    //'FRANCA'			33
    { rule: [] , mask: [] },
    //'GABAO'			241
    { rule: [] , mask: [] },
    //'GAMBIA'			220
    { rule: [] , mask: [] },
    //'GANA'			233
    { rule: [] , mask: [] },
    //'GEORGIA'		995
    { rule: [] , mask: [] },
    //'GIBRALTAR'		350
    { rule: [] , mask: [] },
    //'GRANADA'		1
    { rule: [] , mask: [] },
    //'GRECIA'			30
    { rule: [] , mask: [] },
    //'GROENLANDIA'	299
    { rule: [] , mask: [] },
    //'GUADALUPE'		590
    { rule: [] , mask: [] },
    //'GUAM'			1
    { rule: [] , mask: [] },
    //'GUATEMALA'		502
    { rule: [] , mask: [] },
    //'GUIANA'			592
    { rule: [] , mask: [] },
    //'GUIANA FRANCESA'	594
    { rule: [] , mask: [] },
    //'GUINE'			224
    { rule: [] , mask: [] },
    //'GUINE-BISSAU'	245
    { rule: [] , mask: [] },
    //'HAITI'			509
    { rule: [] , mask: [] },
    //'HAVAI'			1
    { rule: [] , mask: [] },
    //'HOLANDA'		31
    { rule: [] , mask: [] },
    //HONDURAS	504
    { rule: [] , mask: [] },
    //HONG KONG	852
    { rule: [] , mask: [] },
    //HUNGRIA	36
    { rule: [] , mask: [] },
    //IEMEN REPÚBLICA	967
    { rule: [] , mask: [] },
    //INDIA	91
    { rule: [] , mask: [] },
    //INDONESIA	62
    { rule: [] , mask: [] },
    //IRA	98
    { rule: [] , mask: [] },
    // IRAQUE	964
    { rule: [] , mask: [] },
    // IRLANDA	353
    { rule: [] , mask: [] },
    // ISLANDIA	354
    { rule: [] , mask: [] },
    // ISRAEL	972
    { rule: [] , mask: [] },
    // ITALIA	39
    { rule: [] , mask: [] },
    // JAMAICA	1
    { rule: [] , mask: [] },
    // JAPAO	81
    { rule: [] , mask: [] },
    // JORDANIA	962
    { rule: [] , mask: [] },
    // KIRIBATI	686
    { rule: [] , mask: [] },
    // KUWEIT	965
    { rule: [] , mask: [] },
    // LAOS	856
    { rule: [] , mask: [] },
    // LESOTO	266
    { rule: [] , mask: [] },
    // LETONIA	371
    { rule: [] , mask: [] },
    // LIBANO	961
    { rule: [] , mask: [] },
    // LIBERIA	231
    { rule: [] , mask: [] },
    // LIBIA	218
    { rule: [] , mask: [] },
    // LIECHTENSTEIN	423
    { rule: [] , mask: [] },
    // LITUANIA	370
    { rule: [] , mask: [] },
    // LUXEMBURGO	352
    { rule: [] , mask: [] },
    // MACAU	853
    { rule: [] , mask: [] },
    // MACEDONIA	389
    { rule: [] , mask: [] },
    // MADAGASCAR	261
    { rule: [] , mask: [] },
    // MALASIA	60
    { rule: [] , mask: [] },
    // MALAVI	265
    { rule: [] , mask: [] },
    // MALDIVAS	960
    { rule: [] , mask: [] },
    // MALI	223
    { rule: [] , mask: [] },
    // MALTA	356
    { rule: [] , mask: [] },
    // MALVINAS ILHAS	500
    { rule: [] , mask: [] },
    // MARIANAS NORTE ISL.	1
    { rule: [] , mask: [] },
    // MARROCOS	212
    { rule: [] , mask: [] },
    // MARTINICA	596
    { rule: [] , mask: [] },
    // MAURICIO	230
    { rule: [] , mask: [] },
    // MEXICO	52
    { rule: [] , mask: [] },
    // MOCAMBIQUE	258
    { rule: [] , mask: [] },
    // MOLDOVA	373
    { rule: [] , mask: [] },
    // MONTENEGRO	382
    { rule: [] , mask: [] },
    // MONTSERRAT	1
    { rule: [] , mask: [] },
    // NAMIBIA	264
    { rule: [] , mask: [] },
    // NAURU	674
    { rule: [] , mask: [] },
    // NEPAL	977
    { rule: [] , mask: [] },
    // NICARAGUA	505
    { rule: [] , mask: [] },
    // NIGERIA	234
    { rule: [] , mask: [] },
    // NORFOLK ILHA	672
    { rule: [] , mask: [] },
    // NORUEGA	47
    { rule: [] , mask: [] },
    // NOVA CALEDONIA	687
    { rule: [] , mask: [] },
    // NOVA ZELANDIA	64
    { rule: [] , mask: [] },
    // OMA	968
    { rule: [] , mask: [] },
    // PALESTINA	970
    { rule: [] , mask: [] },
    // PANAMA	507
    { rule: [] , mask: [] },
    // PAPUA NOVA GUINE	675
    { rule: [] , mask: [] },
    // PAQUISTAO	92
    { rule: [] , mask: [] },
    // PARAGUAI	595
    { rule: [] , mask: [] },
    // PERU	51
    { rule: [] , mask: [] },
    // POLONIA	48
    { rule: [] , mask: [] },
    // PORTO RICO	1
    { rule: [] , mask: [] },
    // PORTUGAL	351
    { rule: [] , mask: [] },
    // PRINCIPADO MONACO	377
    { rule: [] , mask: [] },
    // QUENIA	254
    { rule: [] , mask: [] },
    // QUIRGUIZIA	996
    { rule: [] , mask: [] },
    // REINO UNIDO	44
    { rule: [] , mask: [] },
    // REP.ESLOVAQUIA	421
    { rule: [] , mask: [] },
    // REP.TCHECA	420
    { rule: [] , mask: [] },
    // REUNIAO ILHAS	262
    { rule: [] , mask: [] },
    // RODRIGUES ILHAS	854
    { rule: [] , mask: [] },
    // ROMENIA	40
    { rule: [] , mask: [] },
    // RUSSIA	7
    { rule: [] , mask: [] },
    // SALOMAO ILHAS	677
    { rule: [] , mask: [] },
    // SAMOA	685
    { rule: [] , mask: [] },
    // SAMOA AMERICANA	684
    { rule: [] , mask: [] },
    // SANTA LUCIA	1
    { rule: [] , mask: [] },
    // SAO MARINO	378
    { rule: [] , mask: [] },
    // SAO TOME E PRINCIPE	239
    { rule: [] , mask: [] },
    // SENEGAL	221
    { rule: [] , mask: [] },
    // SERRA LEOA	232
    { rule: [] , mask: [] },
    // SÉRVIA	381
    { rule: [] , mask: [] },
    // SEYCHELLES	248
    { rule: [] , mask: [] },
    // SIRIA	963
    { rule: [] , mask: [] },
    // SOMALIA	252
    { rule: [] , mask: [] },
    // SRI-LANKA	94
    { rule: [] , mask: [] },
    // ST.PIERRE E MIQUELON	508
    { rule: [] , mask: [] },
    // STA HELENA ILHAS	290
    { rule: [] , mask: [] },
    // SUAZILANDIA	268
    { rule: [] , mask: [] },
    // SUDAO	249
    { rule: [] , mask: [] },
    // SUECIA	46
    { rule: [] , mask: [] },
    // SUICA	41
    { rule: [] , mask: [] },
    // SURINAME	597
    { rule: [] , mask: [] },
    // TADJIQUISTAO	992
    { rule: [] , mask: [] },
    // TAILANDIA	66
    { rule: [] , mask: [] },
    // TAITI	689
    { rule: [] , mask: [] },
    // TANZANIA	255
    { rule: [] , mask: [] },
    // TERRIT.EXT.AUSTRALIA	672
    { rule: [] , mask: [] },
    // TIMOR LESTE	670
    { rule: [] , mask: [] },
    // TOGO	228
    { rule: [] , mask: [] },
    // TONGA	676
    { rule: [] , mask: [] },
    // TRINIDAD E TOBAGO	1
    { rule: [] , mask: [] },
    // TUNISIA	216
    { rule: [] , mask: [] },
    // TURCOMENIA	993
    { rule: [] , mask: [] },
    // TURKS E CAICOS ILHAS	1
    { rule: [] , mask: [] },
    // TURQUIA	90
    { rule: [] , mask: [] },
    // UCRANIA	380
    { rule: [] , mask: [] },
    // UGANDA	256
    { rule: [] , mask: [] },
    // UNIAO DE MYANMAR	95
    { rule: [] , mask: [] },
    // URUGUAI	598
    { rule: [] , mask: [] },
    // UZBEQUISTAO	998
    { rule: [] , mask: [] },
    // VANUATU	678
    { rule: [] , mask: [] },
    // VENEZUELA	58
    { rule: [] , mask: [] },
    // VIETNA	84
    { rule: [] , mask: [] },
    // VIRGENS A. ILHAS	1
    { rule: [] , mask: [] },
    // VIRGENS B.ILHAS	1
    { rule: [] , mask: [] },
    // ZAIRE	243
    { rule: [] , mask: [] },
    // ZAMBIA	260
    { rule: [] , mask: [] },
    // ZANZIBAR	259
    { rule: [] , mask: [] },
    // ZIMBABUE	263
    { rule: [] , mask: [] }
];

var postalRules = [
    //'AFEGANISTAO'	93
    { rule: [] , mask: [] },
    //'AFRICA DO SUL'	28
    { rule: [] , mask: [] },
    //'ALASCA'			1
    { rule: [] , mask: [] },
    //'ALBANIA'		355
    { rule: [] , mask: [] },
    //'ALEMANHA'		49
    { rule: [] , mask: [] },
    //'ANDORRA'		376
    { rule: [] , mask: [] },
    //'ANGOLA'			244
    { rule: [] , mask: [] },
    //'ANGUILLA'		1
    { rule: [] , mask: [] },
    //'ANT.HOLANDESAS'	599
    { rule: [] , mask: [] },
    //'ANTIGUA'		1
    { rule: [] , mask: [] },
    //'ARABIA SAUDITA' 966
    { rule: [] , mask: [] },
    //'ARGELIA'		213
    { rule: [] , mask: [] },
    //'ARGENTINA'		54
    { rule: [] , mask: [] },
    //'ARMENIA'		374
    { rule: [] , mask: [] },
    //'ARUBA'			297
    { rule: [] , mask: [] },
    //'AUSTRALIA'		61
    { rule: [] , mask: [] },
    //'AUSTRIA'		43
    { rule: [] , mask: [] },
    //'AZERBAIJAO'		994
    { rule: [] , mask: [] },
    //'BAHAMAS'		1
    { rule: [] , mask: [] },
    //'BANGLADESH'		880
    { rule: [] , mask: [] },
    //'BARBADOS'		1
    { rule: [] , mask: [] },
    //'BAREIN'			973
    { rule: [] , mask: [] },
    //'BELARUS'		375
    { rule: [] , mask: [] },
    //'BELGICA'		32
    { rule: [] , mask: [] },
    //'BELIZE'			501
    { rule: [] , mask: [] },
    //'BENIN'			229
    { rule: [] , mask: [] },
    //'BERMUDAS'		1
    { rule: [] , mask: [] },
    //'BOLIVIA'		591
    { rule: [] , mask: [] },
    //'BOSNIA E HERZEGOVINA'	387
    { rule: [] , mask: [] },
    //'BOTSUANA'		267
    { rule: [] , mask: [] },
    //'BRASIL'			55
    { rule: [ "^\\d{5}-?\\d{3}$" ] , mask: [ "#####-###" ] },
    //'BRUNEI'			673
    { rule: [] , mask: [] },
    //'BULGARIA'		359
    { rule: [] , mask: [] },
    //'BURKINA FASO'	226
    { rule: [] , mask: [] },
    //'BURUNDI'		257
    { rule: [] , mask: [] },
    //'BUTAO'			975
    { rule: [] , mask: [] },
    //'CABO VERDE'		238
    { rule: [] , mask: [] },
    //'CAMAROES'		237
    { rule: [] , mask: [] },
    //'CAMPUCHEA'		855
    { rule: [] , mask: [] },
    //'CANADA'			1
    { rule: [] , mask: [] },
    //'CASAQUISTAO'	7
    { rule: [] , mask: [] },
    //'CATAR'			974
    { rule: [] , mask: [] },
    //'CAYMAN ILHAS'	1
    { rule: [] , mask: [] },
    //'CHADE'			235
    { rule: [] , mask: [] },
    //'CHILE'			56
    { rule: [] , mask: [] },
    //'CHINA'			86
    { rule: [] , mask: [] },
    //'CHIPRE'			357
    { rule: [] , mask: [] },
    //'CINGAPURA'		65
    { rule: [] , mask: [] },
    //'COLOMBIA'		57
    { rule: [] , mask: [] },
    //'CONGO'			242
    { rule: [] , mask: [] },
    //'COOK ILHAS'		682
    { rule: [] , mask: [] },
    //'COREIA DO SUL'	82
    { rule: [] , mask: [] },
    //'COSTA DO MARFIM'	225
    { rule: [] , mask: [] },
    //'COSTA RICA'		506
    { rule: [] , mask: [] },
    //'CROACIA'		385
    { rule: [] , mask: [] },
    //'CUBA'			53
    { rule: [] , mask: [] },
    //'DINAMARCA'		45
    { rule: [] , mask: [] },
    //'DJIBUTI'		253
    { rule: [] , mask: [] },
    //'DOMINICA'		1
    { rule: [] , mask: [] },
    //'DOMINICANA REPÚBLICA'	1
    { rule: [] , mask: [] },
    //'EGITO'			20
    { rule: [] , mask: [] },
    //'EL SALVADOR'	503
    { rule: [] , mask: [] },
    //'EMIRADOS A. UNIDOS'	971
    { rule: [] , mask: [] },
    //'EQUADOR'		593
    { rule: [] , mask: [] },
    //'ESLOVENIA'		386
    { rule: [] , mask: [] },
    //'ESPANHA'		34
    { rule: [] , mask: [] },
    //'ESTADOS UNIDOS'	1
    { rule: [] , mask: [] },
    //'ESTONIA'		372
    { rule: [] , mask: [] },
    //'ETIOPIA'		251
    { rule: [] , mask: [] },
    //'FAROE ILHAS'	298
    { rule: [] , mask: [] },
    //'FIJI'			679
    { rule: [] , mask: [] },
    //'FILIPINAS'		63
    { rule: [] , mask: [] },
    //'FINLANDIA'		358
    { rule: [] , mask: [] },
    //'FORMOSA'		886
    { rule: [] , mask: [] },
    //'FRANCA'			33
    { rule: [] , mask: [] },
    //'GABAO'			241
    { rule: [] , mask: [] },
    //'GAMBIA'			220
    { rule: [] , mask: [] },
    //'GANA'			233
    { rule: [] , mask: [] },
    //'GEORGIA'		995
    { rule: [] , mask: [] },
    //'GIBRALTAR'		350
    { rule: [] , mask: [] },
    //'GRANADA'		1
    { rule: [] , mask: [] },
    //'GRECIA'			30
    { rule: [] , mask: [] },
    //'GROENLANDIA'	299
    { rule: [] , mask: [] },
    //'GUADALUPE'		590
    { rule: [] , mask: [] },
    //'GUAM'			1
    { rule: [] , mask: [] },
    //'GUATEMALA'		502
    { rule: [] , mask: [] },
    //'GUIANA'			592
    { rule: [] , mask: [] },
    //'GUIANA FRANCESA'	594
    { rule: [] , mask: [] },
    //'GUINE'			224
    { rule: [] , mask: [] },
    //'GUINE-BISSAU'	245
    { rule: [] , mask: [] },
    //'HAITI'			509
    { rule: [] , mask: [] },
    //'HAVAI'			1
    { rule: [] , mask: [] },
    //'HOLANDA'		31
    { rule: [] , mask: [] },
    //HONDURAS	504
    { rule: [] , mask: [] },
    //HONG KONG	852
    { rule: [] , mask: [] },
    //HUNGRIA	36
    { rule: [] , mask: [] },
    //IEMEN REPÚBLICA	967
    { rule: [] , mask: [] },
    //INDIA	91
    { rule: [] , mask: [] },
    //INDONESIA	62
    { rule: [] , mask: [] },
    //IRA	98
    { rule: [] , mask: [] },
    // IRAQUE	964
    { rule: [] , mask: [] },
    // IRLANDA	353
    { rule: [] , mask: [] },
    // ISLANDIA	354
    { rule: [] , mask: [] },
    // ISRAEL	972
    { rule: [] , mask: [] },
    // ITALIA	39
    { rule: [] , mask: [] },
    // JAMAICA	1
    { rule: [] , mask: [] },
    // JAPAO	81
    { rule: [] , mask: [] },
    // JORDANIA	962
    { rule: [] , mask: [] },
    // KIRIBATI	686
    { rule: [] , mask: [] },
    // KUWEIT	965
    { rule: [] , mask: [] },
    // LAOS	856
    { rule: [] , mask: [] },
    // LESOTO	266
    { rule: [] , mask: [] },
    // LETONIA	371
    { rule: [] , mask: [] },
    // LIBANO	961
    { rule: [] , mask: [] },
    // LIBERIA	231
    { rule: [] , mask: [] },
    // LIBIA	218
    { rule: [] , mask: [] },
    // LIECHTENSTEIN	423
    { rule: [] , mask: [] },
    // LITUANIA	370
    { rule: [] , mask: [] },
    // LUXEMBURGO	352
    { rule: [] , mask: [] },
    // MACAU	853
    { rule: [] , mask: [] },
    // MACEDONIA	389
    { rule: [] , mask: [] },
    // MADAGASCAR	261
    { rule: [] , mask: [] },
    // MALASIA	60
    { rule: [] , mask: [] },
    // MALAVI	265
    { rule: [] , mask: [] },
    // MALDIVAS	960
    { rule: [] , mask: [] },
    // MALI	223
    { rule: [] , mask: [] },
    // MALTA	356
    { rule: [] , mask: [] },
    // MALVINAS ILHAS	500
    { rule: [] , mask: [] },
    // MARIANAS NORTE ISL.	1
    { rule: [] , mask: [] },
    // MARROCOS	212
    { rule: [] , mask: [] },
    // MARTINICA	596
    { rule: [] , mask: [] },
    // MAURICIO	230
    { rule: [] , mask: [] },
    // MEXICO	52
    { rule: [] , mask: [] },
    // MOCAMBIQUE	258
    { rule: [] , mask: [] },
    // MOLDOVA	373
    { rule: [] , mask: [] },
    // MONTENEGRO	382
    { rule: [] , mask: [] },
    // MONTSERRAT	1
    { rule: [] , mask: [] },
    // NAMIBIA	264
    { rule: [] , mask: [] },
    // NAURU	674
    { rule: [] , mask: [] },
    // NEPAL	977
    { rule: [] , mask: [] },
    // NICARAGUA	505
    { rule: [] , mask: [] },
    // NIGERIA	234
    { rule: [] , mask: [] },
    // NORFOLK ILHA	672
    { rule: [] , mask: [] },
    // NORUEGA	47
    { rule: [] , mask: [] },
    // NOVA CALEDONIA	687
    { rule: [] , mask: [] },
    // NOVA ZELANDIA	64
    { rule: [] , mask: [] },
    // OMA	968
    { rule: [] , mask: [] },
    // PALESTINA	970
    { rule: [] , mask: [] },
    // PANAMA	507
    { rule: [] , mask: [] },
    // PAPUA NOVA GUINE	675
    { rule: [] , mask: [] },
    // PAQUISTAO	92
    { rule: [] , mask: [] },
    // PARAGUAI	595
    { rule: [] , mask: [] },
    // PERU	51
    { rule: [] , mask: [] },
    // POLONIA	48
    { rule: [] , mask: [] },
    // PORTO RICO	1
    { rule: [] , mask: [] },
    // PORTUGAL	351
    { rule: [] , mask: [] },
    // PRINCIPADO MONACO	377
    { rule: [] , mask: [] },
    // QUENIA	254
    { rule: [] , mask: [] },
    // QUIRGUIZIA	996
    { rule: [] , mask: [] },
    // REINO UNIDO	44
    { rule: [] , mask: [] },
    // REP.ESLOVAQUIA	421
    { rule: [] , mask: [] },
    // REP.TCHECA	420
    { rule: [] , mask: [] },
    // REUNIAO ILHAS	262
    { rule: [] , mask: [] },
    // RODRIGUES ILHAS	854
    { rule: [] , mask: [] },
    // ROMENIA	40
    { rule: [] , mask: [] },
    // RUSSIA	7
    { rule: [] , mask: [] },
    // SALOMAO ILHAS	677
    { rule: [] , mask: [] },
    // SAMOA	685
    { rule: [] , mask: [] },
    // SAMOA AMERICANA	684
    { rule: [] , mask: [] },
    // SANTA LUCIA	1
    { rule: [] , mask: [] },
    // SAO MARINO	378
    { rule: [] , mask: [] },
    // SAO TOME E PRINCIPE	239
    { rule: [] , mask: [] },
    // SENEGAL	221
    { rule: [] , mask: [] },
    // SERRA LEOA	232
    { rule: [] , mask: [] },
    // SÉRVIA	381
    { rule: [] , mask: [] },
    // SEYCHELLES	248
    { rule: [] , mask: [] },
    // SIRIA	963
    { rule: [] , mask: [] },
    // SOMALIA	252
    { rule: [] , mask: [] },
    // SRI-LANKA	94
    { rule: [] , mask: [] },
    // ST.PIERRE E MIQUELON	508
    { rule: [] , mask: [] },
    // STA HELENA ILHAS	290
    { rule: [] , mask: [] },
    // SUAZILANDIA	268
    { rule: [] , mask: [] },
    // SUDAO	249
    { rule: [] , mask: [] },
    // SUECIA	46
    { rule: [] , mask: [] },
    // SUICA	41
    { rule: [] , mask: [] },
    // SURINAME	597
    { rule: [] , mask: [] },
    // TADJIQUISTAO	992
    { rule: [] , mask: [] },
    // TAILANDIA	66
    { rule: [] , mask: [] },
    // TAITI	689
    { rule: [] , mask: [] },
    // TANZANIA	255
    { rule: [] , mask: [] },
    // TERRIT.EXT.AUSTRALIA	672
    { rule: [] , mask: [] },
    // TIMOR LESTE	670
    { rule: [] , mask: [] },
    // TOGO	228
    { rule: [] , mask: [] },
    // TONGA	676
    { rule: [] , mask: [] },
    // TRINIDAD E TOBAGO	1
    { rule: [] , mask: [] },
    // TUNISIA	216
    { rule: [] , mask: [] },
    // TURCOMENIA	993
    { rule: [] , mask: [] },
    // TURKS E CAICOS ILHAS	1
    { rule: [] , mask: [] },
    // TURQUIA	90
    { rule: [] , mask: [] },
    // UCRANIA	380
    { rule: [] , mask: [] },
    // UGANDA	256
    { rule: [] , mask: [] },
    // UNIAO DE MYANMAR	95
    { rule: [] , mask: [] },
    // URUGUAI	598
    { rule: [] , mask: [] },
    // UZBEQUISTAO	998
    { rule: [] , mask: [] },
    // VANUATU	678
    { rule: [] , mask: [] },
    // VENEZUELA	58
    { rule: [] , mask: [] },
    // VIETNA	84
    { rule: [] , mask: [] },
    // VIRGENS A. ILHAS	1
    { rule: [] , mask: [] },
    // VIRGENS B.ILHAS	1
    { rule: [] , mask: [] },
    // ZAIRE	243
    { rule: [] , mask: [] },
    // ZAMBIA	260
    { rule: [] , mask: [] },
    // ZANZIBAR	259
    { rule: [] , mask: [] },
    // ZIMBABUE	263
    { rule: [] , mask: [] }
];

function countryIndex(country, callback){
    var i;
    for(i = 0; i < countries.length; i++) {
        if(countries[i].name.toLowerCase() == country.toLowerCase()){
            break;
        }
    }
    if(i == countries.length) {
        callback(-1);
    } else {
        callback(i);
    }
}

function getCountrysTelRules(index, callback){
    if(telRules[index].rule.length === 0){
        callback(true, null);
    } else {
        callback(false, telRules[index].rule);
    }
}

function getCountrysPostalRules(index, callback){
    if(postalRules[index].rule.length === 0){
        callback(true, null);
    } else {
        callback(false, postalRules[index].rule);
    }
}

exports.countryIndex = countryIndex;
exports.getCountrysTelRules = getCountrysTelRules;
exports.getCountrysPostalRules = getCountrysPostalRules;