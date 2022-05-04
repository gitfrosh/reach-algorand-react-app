// Automatically generated with Reach 0.1.10 (c934aa69)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c934aa69)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  
  
  const v64 = stdlib.protect(ctc0, interact.info, 'for Alice\'s interact field info');
  const v65 = stdlib.protect(ctc1, interact.request, 'for Alice\'s interact field request');
  
  const txn1 = await (ctc.sendrecv({
    args: [v65],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v69], secs: v71, time: v70, didSend: v28, from: v68 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v69], secs: v71, time: v70, didSend: v28, from: v68 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v76, time: v75, didSend: v37, from: v74 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v68, v69, v64],
    evt_cnt: 1,
    funcNum: 2,
    lct: v75,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v82], secs: v84, time: v83, didSend: v46, from: v81 } = txn3;
      
      ;
      const v85 = stdlib.addressEq(v68, v81);
      ;
      sim_r.txns.push({
        amt: v69,
        kind: 'from',
        to: v68,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v46, from: v81 } = txn3;
  ;
  const v85 = stdlib.addressEq(v68, v81);
  stdlib.assert(v85, {
    at: './index.rsh:35:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  ;
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v69], secs: v71, time: v70, didSend: v28, from: v68 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.want(v69), {
    at: './index.rsh:27:22:application',
    fs: ['at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'want',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v68, v69],
    evt_cnt: 0,
    funcNum: 1,
    lct: v70,
    onlyIf: true,
    out_tys: [],
    pay: [v69, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v76, time: v75, didSend: v37, from: v74 } = txn2;
      
      sim_r.txns.push({
        amt: v69,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v76, time: v75, didSend: v37, from: v74 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v46, from: v81 } = txn3;
  ;
  const v85 = stdlib.addressEq(v68, v81);
  stdlib.assert(v85, {
    at: './index.rsh:35:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  ;
  stdlib.protect(ctc1, await interact.got(v82), {
    at: './index.rsh:40:21:application',
    fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
    msg: 'got',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECICYCAQAAIjUAMRhBAVApZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQACRSSQMQABHJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQU1/oAEgbcWyjT+ULA0/zEAEkSxIrIBNAMlW7III7IQNP+yB7NCAIVIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/oAEmouRdLA0/ogAsjT/NP4WUChLAVcAKGdIJDUBMgY1AkIAXUgiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULCBoI0GiABxMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:30:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:37:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
