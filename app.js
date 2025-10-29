/* -------------------- DATA -------------------- */
const CHANNELS = {
IPTV: [
  { name: 'KAPAMILYA', url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd', keyId: 'bd17afb5dc9648a39be79ee3634dd4b8', key: '3ecf305d54a7729299b93a3d69c02ea5', type: 'mpd', logo: '' },   
  { name: '3RsTV', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210631/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.ibb.co/nN0VGRY8/Chat-GPT-Image-Oct-4-2025-05-05-12-AM-1.png' },
  { name: '3rsSinePinoy', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210267/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.ibb.co/2Y83j9Dx/3rs-Sine-Pinoy.png' },
  { name: 'STAR TELEVISION', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210731/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.imgur.com/tSwdUjj.png' }, 
  { name: 'CinePlex Asia', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210632/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://i.imgur.com/tSwdUjj.png' },   
  { name: 'JUZT-TV BOX', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210639/tracks-v1a1/mono.ts.m3u8', type: 'hls', logo: 'https://juzt-tv.vercel.app/your-logo.png' }, 
  { name: 'Sony Sine', url: 'https://a-cdn.klowdtv.com/live1/cine_720p/chunks.m3u8', type: 'hls', logo: '' },   
  { name: 'Blast Movies', url: 'https://amg19223-amg19223c7-amgplt0351.playout.now3.amagi.tv/playlist/amg19223-amg19223c7-amgplt0351/playlist.m3u8', type: 'hls', logo: '' },
  { name: 'Free Movies', url: 'https://amg01553-amg01553c2-samsung-ph-7163.playouts.now.amagi.tv/playlist1080p.m3u8', type: 'hls', logo: '' },
  { name: 'Free Movies plus', url: 'https://s8host2.localnow.api.cms.amdvids.com/v1/manifest/c189661feba961c19bc5fb60b57879ee9b84548a/config10/e5d6b75d-253b-4a05-8ed0-f1570f23619e/2.m3u8', type: 'hls', logo: '' },
  { name: 'Horror TV', url: 'https://streams2.sofast.tv/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/93dc292b-cbcf-4988-ab97-94feced4c14b/1c649e10-e1a9-4e50-9f2d-878ba27d0032/1.m3u8 ', type: 'hls', logo: '' },
  { name: 'ScreamFlix', url: 'https://jungotvstream.chanall.tv/jungotv/screamflix/playlist_720p.m3u8 ', type: 'hls', logo: '' },
  { name: 'Movies Action', url: 'https://shls-live-ak.akamaized.net/out/v1/46079e838e65490c8299f902a7731168/index_2.m3u8 ', type: 'hls', logo: '' },
  { name: 'Movies Sphere', url: 'https://moviesphereuk-samsunguk.amagi.tv/720p-vtt/index.m3u8 ', type: 'hls', logo: '' },
  { name: 'New Movies (us)', url: 'https://newidco-newmovies-1-us.lg.wurl.tv/3000.m3u8 ', type: 'hls', logo: '' },
  { name: 'Stingray MusicMovie', url: 'https://lotus.stingray.com/manifest/cmusic-cme004-montreal/samsungtvplus/dee3e3af-2706-3e77-a952-91b99f6d1819/3291200/manifest.m3u8   ', type: 'hls', logo: '' },
  { name: 'Rakuten Action Movies', url: 'https://54045f0c40fd442c8b06df076aaf1e85.mediatailor.eu-west-1.amazonaws.com/v1/manifest/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6065/a2e4c54d-da0a-45bf-bc49-f778b234cbd5/3.m3u8  ', type: 'hls', logo: '' },
  { name: 'Rakuten Thrillers', url: 'https://thriller-rakuten-tv-uk.fast.rakuten.tv/v1/manifest/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6482/faa7e9f6-1169-4f64-ab36-24ceb7304f48/3.m3u8   ', type: 'hls', logo: '' },
  { name: 'TELERADYO', url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd', keyId: '47c093e0c9fd4f80839a0337da3dd876', key: '50547394045b3d047dc7d92f57b5fb33', type: 'mpd', logo: 'https://www.logo.wine/a/logo/DZMM_TeleRadyo/DZMM_TeleRadyo-Logo.wine.svg' },
  { name: 'GMA PINOY TV', url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd', type: 'mpd', logo: '' },
  { name: 'CINEMO GLOBAL', url: 'https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd', type: 'mpd', logo: '' },
  { name: 'CINEMA ONE', url: 'https://d9rpesrrg1bdi.cloudfront.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd', type: 'mpd', logo: '' },
  { name: 'CINEMO', url: 'https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd', type: 'mpd', logo: '' },
  { name: 'SINEMANILA', url: 'https://live20.bozztv.com/giatv/giatv-sinemanila/sinemanila/chunks.m3u8', type: 'hls', logo: '' }, 
  { name: 'GMA 7', url: 'https://conv.iyadtv.workers.dev/gma7x/stream.mpd', keyId: '31363231383438333031323033393138', key: '38694e34324d543478316b7455753437', type: 'mpd', logo: '' },
    { name: 'ALLTV', url: 'https://conv.iyadtv.workers.dev/alltv/manifest.mpd', keyId: 'bd17afb5dc9648a39be79ee3634dd4b8', key: '3ecf305d54a7729299b93a3d69c02ea5', type: 'mpd', logo: '' }, 
  { name: 'CLTV 36', url: 'https://live.cltv36.tv:5443/LiveApp/streams/cltvlive.m3u8', type: 'hls', logo: '' },    
  { name: 'KAPAMILYA', url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd', keyId: 'bd17afb5dc9648a39be79ee3634dd4b8', key: '3ecf305d54a7729299b93a3d69c02ea5', type: 'mpd', logo: '' },
  { name: 'A2Z', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_a2z/default/index.mpd', keyId: 'f703e4c8ec9041eeb5028ab4248fa094', key: 'c22f2162e176eee6273a5d0b68d19530', type: 'mpd', logo: '' },
  { name: 'RPTV', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cnn_rptv_prod_hd/default/index.mpd', keyId: '1917f4caf2364e6d9b1507326a85ead6', key: 'a1340a251a5aa63a9b0ea5d9d7f67595', type: 'mpd', logo: '' },
  { name: '*TV5', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/tv5_hd/default1/index.mpd', keyId: '2615129ef2c846a9bbd43a641c7303ef', key: '07c7f996b1734ea288641a68e1cfdc4d', type: 'mpd', logo: '' },
  { name: 'PBARUSH', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_pbarush_hd1/default/index.mpd', keyId: '76dc29dd87a244aeab9e8b7c5da1e5f3', key: '95b2f2ffd4e14073620506213b62ac82', type: 'mpd', logo: '' },
  { name: 'ONEPH', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/oneph_sd/default/index.mpd', keyId: '92834ab4a7e1499b90886c5d49220e46', key: 'a7108d9a6cfcc1b7939eb111daf09ab3', type: 'mpd', logo: '' },
  { name: 'PBO', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pbo_sd/default/index.mpd', keyId: 'dcbdaaa6662d4188bdf97f9f0ca5e830', key: '31e752b441bd2972f2b98a4b1bc1c7a1', type: 'mpd', logo: '' },
  { name: 'VIVACINEMA', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/viva_sd/default/index.mpd', keyId: '07aa813bf2c147748046edd930f7736e', key: '3bd6688b8b44e96201e753224adfc8fb', type: 'mpd', logo: '' },
  { name: 'CINEMAX', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_cinemax/default/index.mpd', keyId: 'b207c44332844523a3a3b0469e5652d7', key: 'fe71aea346db08f8c6fbf0592209f955', type: 'mpd', logo: '' },
  { name: 'HBO', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohd/default/index.mpd', keyId: 'd47ebabf7a21430b83a8c4b82d9ef6b1', key: '54c213b2b5f885f1e0290ee4131d425b', type: 'mpd', logo: '' },
  { name: 'HBO FAMILY', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbofam/default/index.mpd', keyId: '872910c843294319800d85f9a0940607', key: 'f79fd895b79c590708cf5e8b5c6263be', type: 'mpd', logo: '' },
  { name: 'HBO HITS', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohits/default1/index.mpd', keyId: 'b04ae8017b5b4601a5a0c9060f6d5b7d', key: 'a8795f3bdb8a4778b7e888ee484cc7a1', type: 'mpd', logo: '' },
  { name: 'HBO SIGNATURE', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbosign/default/index.mpd', keyId: 'a06ca6c275744151895762e0346380f5', key: '559da1b63eec77b5a942018f14d3f56f', type: 'mpd', logo: '' },
  { name: 'HITS MOVIES', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_hitsmovies/default/index.mpd', keyId: '14439a1b7afc4527bb0ebc51cf11cbc1', key: '92b0287c7042f271b266cc11ab7541f1', type: 'mpd', logo: '' },
  { name: 'ROCK ACTION', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_rockextreme/default/index.mpd', keyId: '0f852fb8412b11edb8780242ac120002', key: '4cbc004d8c444f9f996db42059ce8178', type: 'mpd', logo: '' },
  { name: 'ROCK ENTERTAINMENT', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_rockentertainment/default/index.mpd', keyId: 'e4ee0cf8ca9746f99af402ca6eed8dc7', key: 'be2a096403346bc1d0bb0f812822bb62', type: 'mpd', logo: '' },
  { name: 'NBA TV PH', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cgnl_nba/default/index.mpd', keyId: 'c5e51f41ceac48709d0bdcd9c13a4d88', key: '20b91609967e472c27040716ef6a8b9a', type: 'mpd', logo: '' },
  { name: 'CARTOON NETWORK', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cartoonnetworkhd/default/index.mpd', keyId: 'a2d1f552ff9541558b3296b5a932136b', key: 'cdd48fa884dc0c3a3f85aeebca13d444', type: 'mpd', logo: '' },
  { name: 'MOONBUG KIDS', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_moonbug_kids_sd/default/index.mpd', keyId: '0bf00921bec94a65a124fba1ef52b1cd', key: '0f1488487cbe05e2badc3db53ae0f29f', type: 'mpd', logo: '' },
  { name: 'NICK JR', url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd', keyId: 'bab5c11178b646749fbae87962bf5113', key: '0ac679aad3b9d619ac39ad634ec76bc8', type: 'mpd', logo: '' },
  { name: 'NICKELODEON', url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd', keyId: '9ce58f37576b416381b6514a809bfd8b', key: 'f0fbb758cdeeaddfa3eae538856b4d72', type: 'mpd', logo: '' },
  { name: 'HITS HD', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hits_hd1/default/index.mpd', keyId: 'dac605bc197e442c93f4f08595a95100', key: '975e27ffc1b7949721ee3ccb4b7fd3e5', type: 'mpd', logo: '' },
  { name: 'HITS MOVIES', url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd', keyId: 'f56b57b32d7e4b2cb21748c0b56761a7', key: '3df06a89aa01b32655a77d93e09e266f', type: 'mpd', logo: '' },
  { name: 'HITS NOW', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hitsnow/default/index.mpd', keyId: '14439a1b7afc4527bb0ebc51cf11cbc1', key: '92b0287c7042f271b266cc11ab7541f1', type: 'mpd', logo: '' },
  { name: 'One PH', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/oneph_sd/default/index.mpd', type: 'mpd', keyId: '92834ab4a7e1499b90886c5d49220e46', key: 'a7108d9a6cfcc1b7939eb111daf09ab3', logo: '' },
  { name: 'BuKO', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_buko_sd/default/index.mpd', type: 'mpd', keyId: 'd273c085f2ab4a248e7bfc375229007d', key: '7932354c3a84f7fc1b80efa6bcea0615', logo: '' },
  { name: 'SARI-SARI', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_sarisari/default/index.mpd', type: 'mpd', keyId: '0a7ab3612f434335aa6e895016d8cd2d', key: 'b21654621230ae21714a5cab52daeb9d', logo: '' },
  { name: 'PTV4', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_ptv4_sd/default/index.mpd', type: 'mpd', keyId: '71a130a851b9484bb47141c8966fb4a3', key: 'ad1f003b4f0b31b75ea4593844435600', logo: '' },
  { name: 'One Sports', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesports_hd/default/index.mpd', type: 'mpd', keyId: '53c3bf2eba574f639aa21f2d4409ff11', key: '3de28411cf08a64ea935b9578f6d0edd', logo: '' },
  { name: 'One News', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/onenews_hd1/default/index.mpd', type: 'mpd', keyId: 'd39eb201ae494a0b98583df4d110e8dd', key: '6797066880d344422abd3f5eda41f45f', logo: '' },
  { name: 'Bilyonaryo Channel', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/bilyonaryoch/default1/index.mpd', type: 'mpd', keyId: '227ffaf09bec4a889e0e0988704d52a2', key: 'b2d0dce5c486891997c1c92ddaca2cd2', logo: '' },
  { name: 'tvN Movies Pinoy', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tvnmovie/default/index.mpd', type: 'mpd', keyId: '2e53f8d8a5e94bca8f9a1e16ce67df33', key: '3471b2464b5c7b033a03bb8307d9fa35', logo: '' },
  { name: 'TMC', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_tagalogmovie/default/index.mpd', type: 'mpd', keyId: '96701d297d1241e492d41c397631d857', key: 'ca2931211c1a261f082a3a2c4fd9f91b', logo: '' },
  { name: 'Tap Movies', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tapmovies_hd1/default/index.mpd', type: 'mpd', keyId: '71cbdf02b595468bb77398222e1ade09', key: 'c3f2aa420b8908ab8761571c01899460', logo: '' },
  { name: 'DreamWorks (Tagalized)', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworks_hd1/default/index.mpd', type: 'mpd', keyId: '564b3b1c781043c19242c66e348699c5', key: 'd3ad27d7fe1f14fb1a2cd5688549fbab', logo: '' },
  { name: 'One Sports+', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesportsplus_hd1/default/index.mpd', type: 'mpd', keyId: '322d06e9326f4753a7ec0908030c13d8', key: '1e3e0ca32d421fbfec86feced0efefda', logo: '' },
  { name: 'Tap Sports', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tapsports/default/index.mpd', type: 'mpd', keyId: 'eabd2d95c89e42f2b0b0b40ce4179ea0', key: '0e7e35a07e2c12822316c0dc4873903f', logo: '' },
  { name: 'TVUP!', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/tvup_prd/default/index.mpd', type: 'mpd', keyId: '83e813ccd4ca4837afd611037af02f63', key: 'a97c515dbcb5dcbc432bbd09d15afd41', logo: '' },
  { name: 'Rock Action', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_rockextreme/default/index.mpd', type: 'mpd', keyId: '0f852fb8412b11edb8780242ac120002', key: '4cbc004d8c444f9f996db42059ce8178', logo: '' },
  { name: 'Tap TV', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_taptv_sd/default/index.mpd', type: 'mpd', keyId: 'f6804251e90b4966889b7df94fdc621e', key: '55c3c014f2bd12d6bd62349658f24566', logo: '' },
  { name: 'Fashion TV', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/fashiontvhd/default/index.mpd', type: 'mpd', keyId: '971ebbe2d887476398e97c37e0c5c591', key: '472aa631b1e671070a4bf198f43da0c7', logo: '' },
  { name: 'HBO Signature', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbosign/default/index.mpd', type: 'mpd', keyId: 'a06ca6c275744151895762e0346380f5', key: '559da1b63eec77b5a942018f14d3f56f', logo: '' },
  { name: 'HITS', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hits_hd1/default/index.mpd', type: 'mpd', keyId: 'dac605bc197e442c93f4f08595a95100', key: '975e27ffc1b7949721ee3ccb4b7fd3e5', logo: '' },
  { name: 'tvN Premium', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tvnpre/default/index.mpd', type: 'mpd', keyId: 'e1bde543e8a140b38d3f84ace746553e', key: 'b712c4ec307300043333a6899a402c10', logo: '' },
  { name: 'History', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_historyhd/default/index.mpd', type: 'mpd', keyId: 'a7724b7ca2604c33bb2e963a0319968a', key: '6f97e3e2eb2bade626e0281ec01d3675', logo: '' },
  { name: 'Rock Entertainment', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_rockentertainment/default/index.mpd', type: 'mpd', keyId: 'e4ee0cf8ca9746f99af402ca6eed8dc7', key: 'be2a096403346bc1d0bb0f812822bb62', logo: '' },
  { name: 'Cinemax', url: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_cinemax/default/index.mpd', type: 'mpd', keyId: 'b207c44332844523a3a3b0469e5652d7', key: 'fe71aea346db08f8c6fbf0592209f955', logo: '' },
  { name: 'AXN', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2303/default_ott.mpd ', type: 'mpd', keyId: 'fd5d928f5d974ca4983f6e9295dfe410', key: '3aaa001ddc142fedbb9d5557be43792f', logo: '' },
  { name: 'Celestial Movies Pinoy', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/celmovie_pinoy_sd/default/index.mpd', type: 'mpd', keyId: '0f8537d8412b11edb8780242ac120002', key: '2ffd7230416150fd5196fd7ea71c36f3', logo: '' },
  { name: 'HITS Movies', url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd', type: 'mpd', keyId: 'f56b57b32d7e4b2cb21748c0b56761a7', key: '3df06a89aa01b32655a77d93e09e266f', logo: '' },
  { name: 'THRILL', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_thrill_sd/default/index.mpd', type: 'mpd', keyId: '928114ffb2394d14b5585258f70ed183', key: 'a82edc340bc73447bac16cdfed0a4c62', logo: '' },
  { name: 'Lotus Macao', url: 'https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/lotusmacau_prd/default/index.mpd', type: 'mpd', keyId: '60dc692e64ea443a8fb5ac186c865a9b', key: '01bdbe22d59b2a4504b53adc2f606cc1', logo: '' },
  { name: 'tvN Movies', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2406/default_ott.mpd', type: 'mpd', keyId: '8e269c8aa32ad77eb83068312343d610', key: 'd12ccebafbba2a535d88a3087f884252', logo: '' },
  { name: 'One', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2702/default_ott.mpd', type: 'mpd', keyId: 'd8fe398c79065173fa9788f226056510', key: '45e77e6a8ba767b63cacfdb01ef2ac29', logo: '' },
  { name: 'tvN Premium', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/1001/default_ott.mpd', type: 'mpd', keyId: 'faf4d62bb898de503446c28fb1aa9210', key: '19e80ecc5d337215c64004cb49c9cb01', logo: '' },
  { name: 'K+', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/9983/default_ott.mpd', type: 'mpd', keyId: 'aa48b28bd723f91214887df6ed9fad10', key: 'b5a3a800848120c843ae0fa68c09c261', logo: '' },
  { name: 'KBS World ', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2306/default_ott.mpd', type: 'mpd', keyId: '692950d39869c92af9a9ddea453c0d10', key: 'eadc626ab959255f7ab881c03d306fe2', logo: '' },
  { name: 'MTV Live', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5014/default_ott.mpd', type: 'mpd', keyId: '3ac2542a4f7be746633db07647451710', key: '22f964a6d6927ccdba482e775cdff190', logo: '' },
  { name: 'HITS Now ', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5110/default_ott.mpd', type: 'mpd', keyId: 'https://ck-server.danng.me/?username=HishamKamarul&channelid=5110', key: '', logo: '' },
  { name: 'Moonbug ', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5067/default_ott.mpd', type: 'mpd', keyId: 'https://ck-dash-mpd.aqfadtv.xyz/dash-ck/linear/5067', key: '', logo: '' },
  { name: 'Nick Jr', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/9982/default_ott.mpd', type: 'mpd', keyId: 'https://ck-dash-mpd.aqfadtv.xyz/dash-ck/linear/9982', key: '', logo: '' },
  { name: 'BBC World News', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/1008/default_ott.mpd', type: 'mpd', keyId: 'd+wO6yHAeBL9fFhig2bMsw', key: 'AXZ9HCMVwOlVb0d/sfDHEA', logo: '' },
  { name: 'Channel News Asia ', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/605/default_ott.mpd', type: 'mpd', keyId: 'RCdYhO45TQUIH945X/bkFQ', key: '+BKurmvluSSoGBtRLV15EA', logo: '' },
  { name: 'CNN ', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2503/default_ott.mpd', type: 'mpd', keyId: 'v34bl1VcSst0VfcRsqn/Fg', key: 'G2GKKRzs5EyYRd3fxP2bEA', logo: '' },
  { name: 'CNBC Asia', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/900/default_ott.mpd', type: 'mpd', keyId: 'YCgnqHDUmGLRoj8pEpV7TA', key: 'w6OPE0BTF1mhype8XYDIEA', logo: '' },
  { name: 'Bloomberg', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5020/default_ott.mpd', type: 'mpd', keyId: 'db1343545ae25ddecf8dfa4422f35410', key: '79a044b30d64f5c37e6d45d503cbb280', logo: '' },
  { name: 'CGTN', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5019/default_ott.mpd', type: 'mpd', keyId: 'nnBhYfAvuZy2ktKWVHBJTg', key: '/GbvDuNbW6Y53A4TxfipEA', logo: '' },
  { name: 'Al Jazeera', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2110/default_ott.mpd', type: 'mpd', keyId: 'b1fbd0874e7923f5b05929a042aa0610', key: '6c3c498113abffdf454dc935319a794d', logo: '' },
  { name: 'Cartoon Network ', url: 'https://a190aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/ampfzrmpam/out/v1/e08f3866c80040f2bc494cb48ebc7bce/cenc.mpd', type: 'mpd', keyId: '7ef57f7f3e8cf0efe4f3d5772a7cbb35', key: '0ac6d617095fbe0ca7f4c9ae72fa5f51', logo: '' },
  { name: 'YTV', url: 'https://a196aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/o7aqpbb6vv/out/v1/f8f6ef738ef24c4f8176d561ffb8a157/cenc.mpd', type: 'mpd', keyId: '6f0aeae5779f1dcaef23f0bfbc828220', key: '7bcef3cf93de00e3daeb190d15b1ec05', logo: '' },
  { name: 'Disney Channel', url: 'https://a77aivottepl-a.akamaihd.net/pdx-nitro/live/clients/dash/enc/zuf794yutz/out/v1/ca3534bfe4f148298b36719204d108e0/cenc.mpd', type: 'mpd', keyId: 'be9caaa813c5305e761c66ac63645901', key: '3d40f2990ec5362ca5be3a3c9bb8f8b4', logo: '' },
  { name: 'ANC', url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd', type: 'mpd', keyId: '4bbdc78024a54662854b412d01fafa16', key: '6039ec9b213aca913821677a28bd78ae', logo: '' },
  { name: 'TFC', url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/index.mpd', type: 'mpd', keyId: '9568cc84e1d944f38eac304517eab6fd', key: 'f12142af8f39b3bab79d3679d3665ebe', logo: '' },
  { name: 'ANIMAX', url: 'https://tglmp01.akamaized.net/out/v1/de55fad9216e4fe7ad8d2eed456ba1ec/manifest.mpd', type: 'mpd', keyId: 'edf1a715de9748638dd2fad75a419af2', key: '2f5a3199b26e9b693ae881af7ff864cf', logo: '' },
  { name: 'WWE Network', url: 'https://cfrt.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc106wh3yw)/master.mpd', type: 'mpd', keyId: '00208c93f4358213b52220898b962385', key: '8ae6063167228e350dd132d4a1573102', logo: '' },
  { name: 'Celestial Classic Movies', url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/100/default_ott.mpd', type: 'mpd', keyId: 'a642dd4bf3ea782e19202adefb604b10', key: '3f59355e15eed1bb219ea1687d55cfbb', logo: '' }
      ],
   RADIO: [
        { name: '106.3 Yes FM Dagupan', url: 'https://yesfmdagupan.radioca.st/;', type: 'mp3', logo: 'https://i.ibb.co/yBqNhTZN/raryo.jpg' },
  { name: '98.3 Love Radio Dagupan', url: 'https://loveradiodagupan.radioca.st/;', type: 'mp3', logo: 'https://i.ibb.co/yBqNhTZN/raryo.jpg' },
  { name: '90.7 Love Radio', url: 'https://azura.loveradio.com.ph/listen/love_radio_manila/radio.mp3', type: 'mp3', logo: 'https://static.mytuner.mobi/media/tvos_radios/141/dzmb-love-radio-907-fm.fd6dd832.png' },
  { name: '95.5 Eagle FM', url: 'http://n0c.radiojar.com/yus0r2bghd3vv?rj-ttl=5&rj-tok=AAABl4NB7pwAuUwQgelXY74u7w', type: 'mp3', logo: 'https://static.mytuner.mobi/media/tvos_radios/550/eagle-fm-955.31726a37.jpg' },
  { name: '96.3 Easy Rock', url: 'https://azura.easyrock.com.ph/listen/easy_rock_manila/radio.mp3', type: 'mp3', logo: 'https://static.mytuner.mobi/media/tvos_radios/138/dwrk-963-easy-rock.c2c03660.png' },
  { name: '97.9 Home Radio', url: 'https://hrmanila.radioca.st/stream', type: 'mp3', logo: 'https://static.mytuner.mobi/media/tvos_radios/3fFrky9eJE.jpg' },
  { name: '101.1 Yes FM', url: 'https://azura.yesfm.com.ph/listen/yes_fm_manila/radio.mp3', type: 'mp3', logo: 'https://static.mytuner.mobi/media/tvos_radios/211/yes-fm-manila-1011.3596a020.png' },
  { name: '102.7 Star FM', url: 'https://stream.zeno.fm/69b1kf7q0y5tv', type: 'mp3', logo: 'https://static.mytuner.mobi/media/tvos_radios/848/star-fm-manila.c6a245b5.png' },
  { name: '106.7 Energy FM', url: 'http://ph-icecast.eradioportal.com:8000/energyfm_manila', type: 'mp3', logo: 'https://static.mytuner.mobi/media/tvos_radios/PG5RgCjKLe.png' },
      ]	  
};


/* -------------------- STATE -------------------- */
let hls = null;
let shakaPlayer = null;
let drawerTimer = null;
let currentIPTV = null;  // {name,url,type,keyId?,key?}
let currentRadio = null; // {name,url,type}

const MYLIST_KEY = 'threeRS_mylist';

/* -------------------- STORAGE HELPERS -------------------- */
function loadMyList(){
  try { return JSON.parse(localStorage.getItem(MYLIST_KEY) || '[]'); }
  catch(e){ return []; }
}
function saveMyList(arr){
  localStorage.setItem(MYLIST_KEY, JSON.stringify(arr));
}
function addToMyList(entry){
  const list = loadMyList();
  const exists = list.some(x => x.name===entry.name && x.type===entry.type);
  if(!exists){ list.push(entry); saveMyList(list); alert('Saved to MyList!'); renderMyListGrid(); }
  else { alert('Nasa MyList na yan.'); }
}

/* -------------------- RENDER LISTS -------------------- */
function renderIPTVList(filter=''){
  const list = document.getElementById('iptv-list');
  const q = (filter||'').toLowerCase();
  list.innerHTML='';
  CHANNELS.IPTV
    .filter(ch => ch.name.toLowerCase().includes(q))
    .forEach(ch=>{
      const item=document.createElement('div');
      item.className='ch-item';
      item.innerHTML=`<div class="ch-title">${ch.name}</div>`;
      item.onclick=()=>{ playIPTV(ch); restartDrawerAutoHide(); };
      list.appendChild(item);
    });
}
function renderRadioList(){
  const list=document.getElementById('radio-list');
  list.innerHTML='';
  CHANNELS.RADIO.forEach(ch=>{
    const item=document.createElement('div');
    item.className='ch-item';
    item.innerHTML=`<div class="ch-title">${ch.name}</div>`;
    item.onclick=()=>playRadio(ch);
    list.appendChild(item);
  });
}

/* -------------------- SHOW/HIDE -------------------- */
function hideAll(){
  document.getElementById('home-sec').classList.add('hidden');
  document.getElementById('iptv-sec').classList.add('hidden');
  document.getElementById('radio-sec').classList.add('hidden');
  document.getElementById('mylist-sec').classList.add('hidden');
  document.getElementById('chat-sec').classList.add('hidden');
  
  closeIPTVDdrawer();
  destroyPlayers();
  stopRadio();

  // Ensure that the drawer is hidden in all other sections except Live TV
  document.getElementById('iptv-sec').classList.remove('active');
}

function showHome(){
  hideAll();
  document.getElementById('home-sec').classList.remove('hidden');
}

function showIPTV(){
  hideAll();
  const iptvSec = document.getElementById('iptv-sec');
  iptvSec.classList.remove('hidden');
  iptvSec.classList.add('active'); // Add active class to show drawer in Live TV
  renderIPTVList();
  openIPTVDdrawer(); // Open drawer for Live TV
  if (CHANNELS.IPTV.length) playIPTV(CHANNELS.IPTV[0]); // auto-play first
}

function showRadio(){
  hideAll();
  document.getElementById('radio-sec').classList.remove('hidden');
  renderRadioList();
  if (CHANNELS.RADIO.length) playRadio(CHANNELS.RADIO[0]); // auto-play first
}

function showMyList(){
  hideAll();
  document.getElementById('mylist-sec').classList.remove('hidden');
  renderMyListGrid();
}

function showChat(){
  hideAll();
  document.getElementById('chat-sec').classList.remove('hidden');
}

/* -------------------- DRAWER -------------------- */
function openIPTVDdrawer(){
  const d=document.getElementById('iptv-drawer');
  d.classList.add('open');
  restartDrawerAutoHide();
}

function closeIPTVDdrawer(){
  const d=document.getElementById('iptv-drawer');
  d.classList.remove('open');
  if(drawerTimer){ clearTimeout(drawerTimer); drawerTimer=null; }
}
function restartDrawerAutoHide(){
  const d=document.getElementById('iptv-drawer');
  if(!d.classList.contains('open')) d.classList.add('open');
  if(drawerTimer) clearTimeout(drawerTimer);
  drawerTimer=setTimeout(()=>{ d.classList.remove('open'); },10000); // 10s
}

/* -------------------- INIT & WIRING -------------------- */
document.addEventListener('DOMContentLoaded',()=>{
  showHome();
  renderIPTVList(); // pre-render
  renderMyListGrid();

  document.getElementById('open-drawer-btn').addEventListener('click', openIPTVDdrawer);
  document.getElementById('iptv-search').addEventListener('input', (e)=> renderIPTVList(e.target.value));

  document.getElementById('save-to-mylist-btn').addEventListener('click', ()=> {
    if (!currentIPTV) { alert('Walang active IPTV channel.'); return; }
    addToMyList(currentIPTV);
  });
  document.getElementById('save-radio-btn').addEventListener('click', ()=> {
    if (!currentRadio) { alert('Walang active radio stream.'); return; }
    addToMyList(currentRadio);
  });

});
