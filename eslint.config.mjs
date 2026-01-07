// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      // any 타입 사용 허용 (비권장, 필요시만 사용)
      '@typescript-eslint/no-explicit-any': 'off',

      // 처리되지 않은 프로미스 거부 허용
      '@typescript-eslint/no-floating-promises': 'off',

      // 안전하지 않은 인자 허용
      '@typescript-eslint/no-unsafe-argument': 'off',

      // 타입 정의시 interface만 허용
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // 타입 import/export 일관성 강제 (type-imports 권장)
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports', // 타입은 import type 사용
        },
      ],

      // 타입스크립트 명명 규칙
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface', // interface는 PascalCase, I로 시작 금지
          format: ['PascalCase'],
          custom: { regex: '^I[A-Z]', match: false },
        },
        {
          selector: 'typeAlias', // type은 PascalCase
          format: ['PascalCase'],
        },
        {
          selector: 'class', // 클래스는 PascalCase
          format: ['PascalCase'],
        },
        {
          selector: 'variable', // 변수는 camelCase, UPPER_CASE, PascalCase 허용
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
      ],

      // 함수 return type 명시 비강제 (NestJS 권장)
      '@typescript-eslint/explicit-function-return-type': 'off',

      // export function boundary 타입 명시 비강제 (NestJS 권장)
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // 명확하게 추론 가능한 타입은 명시 금지 (ex: let a: number = 5;)
      '@typescript-eslint/no-inferrable-types': 'error',

      // 잘못된 Promise 사용 금지 (ex: void Promise)
      '@typescript-eslint/no-misused-promises': 'error',

      // thenable 아닌데 await 사용 금지
      '@typescript-eslint/await-thenable': 'error',

      // console 사용 경고
      'no-console': 'warn',
      // ==, != 금지, ===, !== 사용
      eqeqeq: 'error',

      // 중괄호 사용 강제 (if, for 등 모두)
      curly: ['error', 'all'],
    },
  },
);
