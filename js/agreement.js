$.serviceContract = (function () {
    var defaultOptions = {};
    return function (options) {
        var option = $.extend({},defaultOptions,options);
        // 展示代码
        var html= '<div class="agreement-mask" id="agreement-mask">\
            <ul style="margin: 3%;">\
            <h1 style="text-align:center;">中国联通客户入网服务协议</h1>\
            <br />\
            <p>甲方：客户</p>\
        <p>乙方：中国联合网络通信有限公司云南省分公司</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据《中华人民共和国合同法》、《中华人民共和国电信条例》等有关法律法规的规定，甲乙双方在平等、自愿、公平、诚信的基础上，基于对乙方通信服务的了解和需求，甲方自愿申请成为乙方客户，并达成协议如下：</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第一条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;入网要求及业务办理</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）甲方办理入网、变更手续时，应提交以下登记资料：</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、个人客户：提供个人有效身份证件原件，委托他人办理的应同时提交本人及代理人有效身份证件原件及授权委托书（是否允许委托及是否需要授权委托书均由各省自定）。利用个人临时身份证件原件办理的，须同时提供公安部门出具的身份证领取凭证、身份信息辅助证件（驾照、医保卡或户口本等），不得委托他人办理。（临时身份证是否可以办理业务各省自定）</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、单位客户：提供单位有效证件原件（或加盖公章的单位有效证件复印件）、经办人有效身份证件原件、加盖公章的单位介绍信等。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、甲方户籍所在地（以有效身份证件的住址为准）或法定住所地（单位有效证件上单位注册地）不在本地的，应该按照乙方的要求办理相应的担保手续（是否允许担保及具体担保手续均由各省自定）。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）甲方应使用国家给予入网许可标志的终端设备，终端设备应具备支持所选服务的相应功能，如无法支持所选服务，甲方应自行承担后果，并向乙方全额支付其所选服务的全部费用。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）甲方欲将业务号码过户时，应先交清所有费用，过户时须由双方持有效身份证件原件办理。如有特殊情况，甲方可委托他人办理，但应同时提交本人及代理人有效身份证件原件及授权委托书。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）在甲方通过过户成为新机主的情形下，如因原机主未亲自到场办理过户而导致原机主就此提出异议，甲方应无条件放弃因过户产生的全部权益，并承担由此对原机主及对乙方造成的一切损失。过户代理人对此承担连带责任（各省按照实际情况自定）。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（五）甲方采用担保人方式入网的，办理过户业务时，甲方须提交担保人出具的书面文件，说明担保人同意继续担保或要求终止担保。新机主应符合本协议第一条第（一）款的条件（各省按照实际情况自定）。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（六）甲方本人未到场，由代理人、经办人办理各类业务的，甲方应承担由此产生的责任与义务；代理人、经办人承担连带责任。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第二条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;费用标准和费用交纳</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）乙方应在国家电信资费主管部门允许的范围内设定资费标准、向客户明码标价、公告交费期限信息；甲方应在乙方明示的期限内足额交纳各项通信费用。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）甲方使用乙方提供的资费套餐方案，套餐有效期为一年（双方特殊约定的除外）。套餐到期后，双方如无异议，有效期逐年自动顺延。如无特殊约定，甲方在有效期内或到期后可更换套餐。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）如遇国家统一调整通信费用标准，则按国家统一规定执行。如遇乙方发布、调整资费，自乙方公告确定的生效日起执行新的资费标准。在乙方公告确定的生效日前，甲方未提出异议的视为同意，协议继续履行；甲方提出异议且未能与乙方达成一致的，甲方向乙方结清全部未付款项后本协议自动终止。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）若甲方为后付费用户，每月01日—30日为支付上月费用的交费期限。甲方应按时交纳通信费用。甲方未在约定期限内足额交纳通信费用的，乙方每日加收所欠费用的３‰作为违约金，并有权暂停甲方服务；甲方交清欠费和违约金后，除甲方明确提出不开通或已销号外，乙方应在24小时内恢复甲方服务。对前述情形，乙方将保留追缴欠费、违约金及向征信机构提供用户欠费信息的权利，也可用通知单、委托第三方等形式追缴欠费。<br />（五）若甲方为预付费用户，则必须保证账户上有充足的款项。如甲方账户满足消费条件的余额不足，乙方有权限制或停止向甲方提供服务，且乙方可不再另行通知。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（六）甲方定制第三方增值业务或其它收费业务，乙方可以代第三方向甲方收取信息费、功能费等，甲方使用第三方提供的增值业务或其它收费业务由第三方制定收费标准并公布。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（七）甲方如需开通国际业务、港澳台业务，应按乙方规定交纳相应费用。（八）甲方不应以不知晓终端产生网络流量的原因（例如终端软件自动升级）为由，拒绝支付或要求减免相应费用。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第三条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户权益</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）网络服务</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、乙方在现有技术条件下的网络覆盖范围内向甲方提供通信服务。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、乙方提供的网络服务应符合国家规定的通信质量标准。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）客户服务</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、乙方在承诺的网络覆盖范围内按照不低于《电信服务规范》的标准向客户提供服务。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、<b>乙方向甲方提供客户服务电话10010、网上营业厅www.10010.com等渠道，以便甲方了解乙方各项服务。</b>乙方还应向甲方免费提供通话所在地（仅限大陆地区，不含港澳台）火警119、匪警110、医疗急救120、交通事故报警122等公益性电信服务。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、乙方向甲方提供需要甲方支付月功能费的服务项目时，应征得甲方同意；乙方开通服务项目让甲方进行体验时，不收取体验服务项目月功能费。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、对于甲方通信服务开通/关闭申请，乙方应在承诺的时限内操作完成（双方另有约定的除外）。乙方超过时限未及时开通/关闭的，应减免甲方由此产生的通信费用。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、乙方依法保证甲方的信息资料安全、通信自由和通信秘密，但以下情形不应视为乙方违反本条约定：（1）因追缴欠费需要，向第三方机构和征信机构提供用户个人相应信息及欠费信息的；（2）为向甲方提供更好的服务，通过短信、彩信、wappush、电话、电子邮件、信函、微博、微信等方式向甲方发送业务服务信息或进行互动沟通的；（3）法律法规另有规定的。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第四条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;风险与责任</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）甲方应保证入网、变更登记资料真实有效、准确完整，并有义务配合乙方对登记资料进行查验。甲方登记资料如有变更，应主动办理变更手续。因甲方提供的客户资料不详、不实或变更后未及时通知乙方等原因，使乙方无法向甲方提供服务或甲方无法享受到乙方提供的相关服务，乙方无需向甲方承担任何责任。<b>如乙方发现因甲方登记资料失实或者甲方未配合及时更正，乙方有权暂停、终止甲方服务，且乙方无需向甲方承担任何责任。</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）<b>甲方应妥善保管自己的用户号码、通信卡、终端、宽带账号，若发现丢失或被盗用，可及时拨打客户服务电话或到乙方营业网点办理暂时停机或修改账号密码手续；并可向公安机关报案，乙方应配合公安机关调查，但乙方不承担上述情形对甲方所造成的后果；如甲方将名下号码交予他人使用，因此引起的义务与责任仍由甲方承担。</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）甲方应妥善管理其服务密码。服务密码是甲方办理业务的重要凭证，甲方入网后应立即修改初始服务密码。<b>凡使用服务密码定制、变更或终止业务的行为均被视为甲方或甲方授权的行为，因此引起的义务与责任均由甲方承担。</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）<b>乙方按照现有技术标准为甲方提供通信服务，但乙方无法控制第三方利用各种手段从事违法行为等情况的发生，如因第三方的恶意行为造成甲方的损失，乙方对此将不承担相关责任。</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（五）甲方使用固网及宽带业务时，未经有关部门批准许可，不得自行更改其使用性质，不得开设各类服务站点，不得利用计算机互联网络进行任何经营性服务活动，否则乙方有权停止服务，依法追缴各项费用和违约金，并不承担任何责任。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（六）若非双方另行约定，乙方提供的宽带接入线路最多限定X个终端上网使用，未经乙方书面同意，甲方不得私自组网连接其他终端设备。（各省公司自定）</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（七）<b>甲方退网时，甲方租赁或乙方免费提供给甲方使用的终端设备，应归还乙方或按照甲乙双方相关约定处理。</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（八）<b>甲方在欠费情况下，乙方有权拒绝为甲方开办其他业务（含移网、固网、宽带等所有业务），直至甲方补交全部欠费及违约金。</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（九）乙方在受理业务（服务）后，将进行线路资源核查，对于不具备开通条件的，在乙方告知甲方后，本协议自动终止，乙方退还甲方已交纳费用，但不承担其他责任。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十）在固定电话开通并正常使用前（含新装、移机、改号等），甲方不能将已选中号码通知他人或进行宣传，否则由此所造成的后果及损失，由甲方自行承担。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十一）<b>甲方所办理的数据业务下行速率标称值仅为乙方提供的数据业务下行速率最高值，乙方不能保证在任何情况下均能达到标称值，甲方对此表示知悉并认可。</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十二）<b>按照公平使用原则，乙方将对甲方的移动数据流量进行封顶限制，甲方每月的移动数据流量达到或超出流量封顶额度时，乙方可暂停甲方当月的上网服务，次月自动恢复开通。</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十三）甲方未付的通信费用达到信用额度时（信用额度是指用户可以用于透支消费的最高通信费用额度），应及时补充交纳通信费用；当甲方未付的通信费用超过信用额度时，乙方有权暂停甲方网络服务（超过信用额度停机不受约定交费期限的限制）。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十四）<b style="background-color: yellow;">甲方发布违法信息、违反公序良俗内容的信息，或未经接收客户同意大量发布商业广告等其他骚扰信息、拨打骚扰电话等不当行为，以及利用乙方提供的服务从事违法犯罪活动的，乙方有权依据行业主管部门、有关行政机关的指令、客户举报或投诉，以及乙方制定的为保障公众利益的规范，关闭甲方信息发送功能，或暂停直至终止服务，由此造成的后果由甲方承担。</b>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十五）因甲方原因造成的通信卡密码丢失、锁卡或被他人获取造成的损失，乙方不承担责任，甲方不能以此为由拒绝按本协议约定支付通信费用。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第五条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;违约责任</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）一方违约给对方造成损失的，应当依法承担赔偿责任，但违约方应承担的赔偿损失的责任范围不包括守约方未实现的预期利润或利益、商业信誉的损失、丢失的数据本身及因数据丢失引起的损失、守约方对第三方的责任及其他间接损失。\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）因不可抗力导致本协议部分或全部不能履行的，双方可部分或全部免除责任。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第六条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;协议的变更与解除</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）乙方在本协议外以公告、使用手册、资费单页等书面形式公开做出的服务承诺，甲方办理各类业务所签署的表单、业务协议、须知等均自动成为本协议的补充协议；与本协议冲突部分以补充协议为准，补充协议中未约定部分以本协议为准。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）甲方要求终止服务（双方另有约定的除外）申请办理拆机或销户的，<b>如甲方预存费用不足，则应按照乙方要求预存一定数额的通信费，</b>次月按照乙方业务规定和双方约定结清相关费用。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）<b>有下列情形之一的，乙方有权单方解除协议，收回号码或账号并终止服务，并保留追究甲方违约责任的权利：</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、<b>甲方提供的有效证件（包括代理人/经办人提供的有效身份证件）虚假、不实；</b> </p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、<b>甲方自行安装未取得入网许可或可能影响网络安全或网络服务质量设备的；</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、<b>甲方以担保等方式取得号码使用权的，如担保人违反保证条款或有确切证据证明担保人无能力履行保证责任的；</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、<b>甲方未办理相关手续，自行改变电信业务使用性质或私自转让租用权的；</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、<b>甲方欠费停机后3个月仍未交清通信费用和违约金的;</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6、<b>业务（服务）超过约定有效期的；</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7、<b>该号码被国家司法机关认定用于违法犯罪活动或其它不当用途的；</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8、<b>乙方收到国家行政管理部门通知要求停止甲方服务的； </b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9、<b style="background-color: yellow;">预付费产品在约定期限内未激活的；</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10、<b>违规外呼、呼叫频次异常的；</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11、<b>法律法规规定的其他情形。</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）因技术进步或国家政策等原因导致本协议（部分或全部）无法继续履行的，乙方保留对电信业务（服务）做出调整的权利，调整前乙方应按照有关规定发布公告并提出相应解决方案。<b>甲方可就解决方案与乙方协商，但不得要求乙方继续履行本协议。</b></p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第七条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;协议争议</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有关协议争议，双方可沟通协商解决；协商不成的，甲方可向当地通信管理局或消费者协会申请进行调解；任何一方均可向乙方住所地的人民法院起诉。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第八条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;协议生效</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本协议签约页面点击确认签署本协议前，请确保您已充分阅读并完全同意本协议内容，一旦您点击确认签署本协议，即表明您已充分阅读并完全同意本协议内容，本协议即在您与乙方（<b style="background-color: yellow;">中国联合网络通信有限公司云南省分公司</b>）之间产生法律效力。如果您不同意本协议的任意内容，或者无法准确理解乙方（<b style="background-color: yellow;">中国联合网络通信有限公司云南省分公司</b>）对条款的解释，请不要进行后续操作。本协议一式两份，甲乙双方各执一份，有效期一年。协议到期后，双方如无异议，有效期以一年为周期自动顺延。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第九条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特殊号码需增加下述《中国联通客户移动业务靓号协议》相关补充规定：</p>\
        <p>特殊号码定义：业务号码排序为AAA,AABB,ABAB等特殊排序类型的号码适用。</p>\
        <h2 style="text-align: center;">中国联通客户移动业务靓号协议</h2>\
            <p>甲方：（客户同以下签名者）</p>\
        <p>乙方：中国联合网络通信有限公司云南分公司</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本协议作为《中国联通客户入网服务协议》的补充协议，并与《中国联合网络通信有限公司云南分公司客户综合业务受理单》（以下简称业务受理单）具同等法律效力。甲乙双方在平等自愿、公平诚信的基础上，基于对乙方移动通信服务的了解和需求，达成协议如下：</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第一条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甲方所选择的移动业务靓号及相关的预存款、月承诺通信费、协议期及套餐等内容详见业务受理单或网上商城下单界面。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第二条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;协议内容</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(一)本协议中甲方预存款在开户当日返还，仅限该号码使用，返还预存款在抵扣当月通信费、套餐费等全部费用后仍有剩余的可延期消费，只在甲方办理过户或销户业务时与乙方清算后方可退还余额部分。预存款可用于抵扣甲方每月承诺通信费（含国际及台港澳长途、国际及台港澳漫游、SP增值业务等费用）。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(二)甲方选择该号码并办理入网手续当月，按照甲方选择的套餐计费。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(三)当甲方月承诺通信费与其选择的营销活动套餐费有差异时，每月通信费用按两者比较取高值计。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(四)在协议期内，甲方不能办理变更为预付费业务、降低月承诺通信费、停机保号、复装（销户恢复）等业务。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(五)协议期内以及协议期外，甲方办理过户业务时，新用户需重新签订靓号入网协议并交纳预存款，该号码的协议期及月承诺通信费自过户次月重新开始生效。若新用户拒绝签订新入网协议及缴纳预存款的,乙方不为甲方办理过户。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(六)若甲方在申请办理2G/3G与4G业务互转时，甲乙双方所签原协议中的剩余预存款、月承诺通信费、剩余协议期仍按原协议执行，但过户、销户等规则应按照本协议执行。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(七)甲方承诺协议期内保证该号码正常开通使用，若该号码发生逾期欠费，按照《中华人民共和国电信条例》的相关规定，乙方可对该号码暂停服务，该号码发生逾期欠费超过3个月，乙方将对该号码终止服务、销户回收处理。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(八)本协议如提前终止解除，该号码即做销户处理，违约赔偿责任根据第三条违约责任及承担的约定处理。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第三条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;违约责任及承担</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）甲方违约责任</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.甲方在协议期内提前终止解除协议，则甲方构成违约，应向乙方支付违约金，违约金=月承诺通信费（元）*3个月，同时该号码由乙方做销户回收处理。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.因甲方欠费或其他原因致使该号码被销户处理的，则甲方构成违约，应向乙方支付违约金，违约金为销户前该号码产生的全部欠费以及逾期缴纳日千分之三的滞纳金，本协议自乙方系统销户之日起自动解除，乙方有权保留对甲方应支付的违约金、滞纳金、乙方因追欠产生的全部费用追偿。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.乙方有权以甲方账户中剩余的预存款直接抵扣欠费、违约金及约定的相关费用，不足部分，乙方有权向甲方追缴 。违约金包括但不限于因甲方欠费发生的逾期付款违约金及甲方提前终止、解除本协议应该支付的违约金。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）乙方违约责任</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乙方构成违约的，应按《中华人民共和国电信条例》及其他法律法规有关规定，承担违约责任。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>第四条</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;协议生效</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本协议自双方签字盖章之日起生效，本协议到期时，如甲方未提出对套餐资费的修改要求，视为双方同意继续履行本协议约定。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（甲方承诺：本人已经充分、完整阅读并理解本协议所述全部条款及条件。）</p>\
        <div style="text-align: center;">\
            <a href="javascript:void(0);" class="confirm">【确认】</a>\
        </div>\
        </ul>\
        </div>';
        var modal = $(html).appendTo(document.body);
        // 获得dom 元素 绑定 事件
        var $agreement = $('#agreement-mask');
        $agreement.on('click','.confirm',function () {
            $('#agreement-mask').remove();
        });
    }
})();

$.iceCream = (function () {
    var defaultOptions = {};
    return function (options) {
        var option = $.extend({},defaultOptions,options);
        // 展示代码
        var html= '<div class="agreement-mask" id="agreement-mask">\
            <ul style="margin: 3%;">\
            <p>甲方：______________________</p>\
        <p>乙方：中国联合网络通信有限公司云南分公司</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甲、乙双方在遵守《合同法》等相关法律法规的前提下，经协商一致达成本促销活动协议：</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、为了使您能够参加乙方的芝麻冰激凌套餐促销活动，您同意授权乙方查询您的芝麻分，并将您的姓名、身份证号发送给芝麻信用管理有限公司用于乙方判断您是否符合办理芝麻冰激凌套餐的条件（您的芝麻分需>=550才能参加）。如您成功办理了芝麻冰激凌套餐，您同意将您的姓名、身份证号、您参加芝麻冰激凌套餐促销活动所办理的手机号码信息、履约信息及乙方掌握的与您所选芝麻冰激凌套餐有关的其他信息发送给芝麻信用管理有限公司用于履约监督。您承诺对此将不会向乙方及/或乙方的关联方以任何形式提出任何的权利主张，也不会追究乙方及/或乙方的关联方的任何责任。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、如果您在芝麻冰激凌套餐使用期内发生欠费或者其他违约的情况，您的姓名、身份证、违约的手机号码信息也将用于追缴欠费和违约金的用途。此外，您还需要承担“违约信息加入芝麻信用黑名单、信息负面披露、扣减芝麻分等后果”，在未来可能影响您的信用记录。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、本营销活动由广州乐芃信息科技有限公司协助运营支持，并代收代缴相关费用。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、本协议一经订立，即对甲乙双方产生法律约束力。</p>\
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、因本协议的签订和履行发生的一切争议，如双方协商不成的，任何一方有权将争议提交乙方住所地有管辖权的人民法院诉讼解决。</p>\
        <p>甲方：（签字或盖章）  乙方：（盖章）</p>\
        <p>甲方代理人或经办人：（签字或盖章）</p>\
        <p>甲方用户号码：</p>\
        <p>签署日期： 年 月 日  签署日期： 年 月 日</p>\
        <div style="text-align: center;">\
            <a href="javascript:void(0);" class="confirm">【确认】</a>\
        </div>\
        </ul>\
        </div>';
        var modal = $(html).appendTo(document.body);
        // 获得dom 元素 绑定 事件
        var $agreement = $('#agreement-mask');
        $agreement.on('click','.confirm',function () {
            $('#agreement-mask').remove();
        });
    }
})();
