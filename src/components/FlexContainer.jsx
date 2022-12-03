import styled, { css } from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flex_dc }) => (flex_dc ? 'column' : 'row')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  gap: ${({ gap }) => gap};
  max-width: ${({ mxWidth }) => mxWidth};

  ${({ flex_jc_c }) => flex_jc_c && 'justify-content : center'};
  ${({ flex_jc_fs }) => flex_jc_fs && 'justify-content : flex-start'};
  ${({ flex_jc_fe }) => flex_jc_fe && 'justify-content : flex-end'};
  ${({ flex_jc_sb }) => flex_jc_sb && 'justify-content : space-between'};
  ${({ flex_jc_sa }) => flex_jc_sa && 'justify-content : space-around'};
  ${({ flex_jc_se }) => flex_jc_se && 'justify-content : space-evenly'};

  ${({ flex_ai_c }) => flex_ai_c && 'align-items : center;'};
  ${({ flex_ai_fs }) => flex_ai_fs && 'align-items : flex-start;'};
  ${({ flex_ai_fe }) => flex_ai_fe && 'align-items : flex-end'};

  align-content: ${({ flex_ac_c }) => flex_ac_c && 'alignContent : center'};

  ${({ pd }) => `padding: ${pd}`};
  ${({ mg }) => mg ? `margin: ${mg}` : null};
  ${({ bg }) => `background: ${bg}`};
  ${({ w }) => `width:${w}`};
  ${({ overflow_h }) =>
    overflow_h
      ? css`
          overflow: hidden;
        `
      : null}

  /* New type of props */
  ${({ fd_c }) => fd_c && 'flex-direction:column;'}
  ${({ jc_c }) => jc_c && 'justify-content : center'};
  ${({ jc_fs }) => jc_fs && 'justify-content : flex-start'};
  ${({ jc_fe }) => jc_fe && 'justify-content : flex-end'};
  ${({ jc_sb }) => jc_sb && 'justify-content : space-between'};
  ${({ jc_sa }) => jc_sa && 'justify-content : space-around'};
  ${({ jc_se }) => jc_se && 'justify-content : space-evenly'};

  ${({ ai_c }) => ai_c && 'align-items : center;'};
  ${({ ai_fs }) => ai_fs && 'align-items : flex-start;'};
  ${({ ai_fe }) => ai_fe && 'align-items : flex-end'};
  ${({ ai_st }) => ai_st && 'align-items : streth'};

  align-content: ${({ ac_c }) => ac_c && 'alignContent : center'};
`