import React from 'react';
import styles from './hiv-summary-label.component.scss';

interface HivSummaryLabelProps {
  title: string;
  value: React.ReactNode;
  titleStyles?: React.CSSProperties;
  valueStyles?: React.CSSProperties;
}

const HivSummaryLabel: React.FC<HivSummaryLabelProps> = ({ title, value: label, titleStyles, valueStyles }) => {
  return (
    <div className={styles.wrapper}>
      <p style={{ ...titleStyles }} className={styles.title}>
        {title}
      </p>
      <div style={{ ...valueStyles }} className={styles.label}>
        {label}
      </div>
    </div>
  );
};

export default HivSummaryLabel;
