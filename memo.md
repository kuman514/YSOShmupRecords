## ESLint와 Prettier 충돌
- Single Quote String에서 Single Quote Escape 문자가 든 걸 Prettier가 강제로 Double Quote String으로 바꿔놓는 문제.
  - 증상
    - Prettier 룰과 VSCode의 Format On Save 특성 상, `'dariusgaiden-z\''`를 저장 시 `"dariusgaiden-z'"`로 바뀌게 된다.
    - 이 경우, ESLint에서 설정해놓은 `quote` 룰을 위반하게 된다.
    - 그렇다고 Double Quotes나 Backticks를 쓰는건 JS/TS String의 일관성을 해치기에 쓰고 싶진 않다. (Double Quotes는 JSX 태그에, Backticks는 표현식 삽입이나 줄바꿈 등 꼭 템플릿 리터럴로 해야 하는 경우에만 쓰고 싶다.)
  - 목표
    - `'dariusgaiden-z\''`를 저장 이후에도 `'dariusgaiden-z\''`오 그대로 남게 하도록 만들자.
  - 시도
    - `'dariusgaiden-z\''`가 적힌 줄 위에 `// prettier-ignore`를 달면 의도한 대로 나온다. 그렇지만 더 깔끔한 방법이 있을까? 그러니까, 주석 없이 Single Quote Escape를 바꾸지 말라고 아예 Prettier 룰로 집어넣는 방법?
    - 관련 옵션을 찾을 수 없다. [Rationale 문서](https://prettier.io/docs/en/rationale#strings)에 따르면, Prettier는 **무조건** Escape가 적은 따옴표를 선택하여 변경한다고 한다. 또한, [옵션 철학 문서](https://prettier.io/docs/en/option-philosophy)에 따르면, 옵션 자체가 더 늘어날 일은 없을 것으로 보인다.
  - 결론
    - 목표에 맞는, 더 나은 방법을 찾는다면 바로 적용하겠지만, 지금 당장 `// prettier-ignore` 외의 방법은 불가능할 것 같다.
    - 또한, 사용할 때마다 바로 윗줄에 `// prettier-ignore`를 써야 하기 때문에, `'dariusgaiden-z\''`보단 `'dariusgaiden-zprime'` 등으로 대체해서 Escape 자체를 줄일 수 밖에 없을 것 같다.

## Snapshot Test를 추가하는 이유
- UI가 의도치 않게 변경되지 않음을 확실시 하기 위해 사용.
- Snapshot Tests가 실패할 경우, UI가 의도치 않게 변형되지 않도록 조치하거나 스냅샷을 갱신해야 한다.
- [관련 문서](https://jestjs.io/docs/snapshot-testing)

## fireEvent나 Simulate를 사용한 테스트에서 state 변경을 반영시키려면
- 테스트 중 Warning 내용
  ```
  Warning: An update to ImageZoomAndMoveController inside a test was not wrapped in act(...).

  When testing, code that causes React state updates should be wrapped into act(...):
  ```
  ```TypeScript
  act(() => {
    /* fire events that update state */
  });
  /* assert on the output */
  ```
  ```
  This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
  ```
