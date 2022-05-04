'reach 0.1';
'use strict';

export const main =
  Reach.App(
    {
      untrustworthyMaps: true,
      connectors: [ALGO],
    },
    [Participant('Alice', {
      request: UInt,
      info: Bytes(20)
    }),
    Participant('Bob', {
      want: Fun([UInt], Null),
      got: Fun([Bytes(20)], Null)
    })],
    (A, B) => {
      A.only(() => {
        const request = declassify(interact.request);
      });
      A.publish(request);
      commit();

      B.only(() => {
        interact.want(request);
      });
      B.pay(request);
      commit();

      A.only(() => {
        const info = declassify(interact.info);
      });
      A.publish(info);
      transfer(request).to(A);
      commit();

      B.only(() => {
        interact.got(info);
      });
      exit();
    });
