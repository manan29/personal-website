'use client';

import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { experience, notableWins, tools } from '@/lib/experienceData';
import { calculateDuration, calculateTotalExperience } from '@/lib/calculateDuration';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#1A1A1A',
  },
  header: {
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginBottom: 3,
  },
  titleText: {
    fontSize: 12,
    color: '#3730A3',
    marginBottom: 3,
  },
  linkedIn: {
    fontSize: 9,
    color: '#4A4744',
  },
  summary: {
    fontSize: 10,
    color: '#4A4744',
    marginBottom: 14,
    lineHeight: 1.5,
  },
  sectionHeading: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#3730A3',
    marginTop: 14,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#C7D2FE',
  },
  companyBlock: {
    marginBottom: 10,
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  companyLeft: {
    flexDirection: 'row',
  },
  companyName: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginRight: 6,
  },
  companyTag: {
    fontSize: 8,
    color: '#166534',
  },
  companyDates: {
    fontSize: 9,
    color: '#AAAAAA',
  },
  tagline: {
    fontSize: 8,
    color: '#6B6B6B',
    marginBottom: 4,
  },
  roleBlock: {
    marginTop: 4,
    marginBottom: 3,
  },
  roleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  roleTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
  },
  rolePeriod: {
    fontSize: 9,
    color: '#6B6B6B',
  },
  bullet: {
    fontSize: 9,
    color: '#4A4744',
    lineHeight: 1.4,
    marginBottom: 2,
    marginLeft: 8,
  },
  winsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
  },
  winCard: {
    width: '50%',
    marginBottom: 6,
    paddingRight: 8,
  },
  winNumber: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: '#3730A3',
    marginBottom: 1,
  },
  winLabel: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginBottom: 1,
  },
  winSub: {
    fontSize: 8,
    color: '#6B6B6B',
  },
  toolRow: {
    marginBottom: 4,
  },
  toolCategory: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#3730A3',
    marginBottom: 1,
  },
  toolItems: {
    fontSize: 9,
    color: '#4A4744',
  },
});

const totalYears = calculateTotalExperience('2015-06');

export default function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Manan Sachdeva</Text>
          <Text style={styles.titleText}>Seller, Coach</Text>
          <Text style={styles.linkedIn}>linkedin.com/in/manansachdeva</Text>
        </View>

        {/* Summary */}
        <Text style={styles.summary}>
          {`Sales leader with ${totalYears} years of experience building revenue functions at SaaS startups - from individual contributor to Head of Sales and Customer Success. Skilled in complex enterprise deals, team building, and scaling go-to-market functions from 0 to 1.`}
        </Text>

        {/* Experience */}
        <Text style={styles.sectionHeading}>Experience</Text>
        {experience.map((company) => (
          <View key={company.name} style={styles.companyBlock}>
            <View style={styles.companyHeader}>
              <View style={styles.companyLeft}>
                <Text style={styles.companyName}>{company.name}</Text>
                {company.tag && <Text style={styles.companyTag}>{company.tag.label}</Text>}
              </View>
              <Text style={styles.companyDates}>{company.dates}</Text>
            </View>
            {company.tagline && <Text style={styles.tagline}>{company.tagline}</Text>}
            {company.roles.map((role) => (
              <View key={role.title} style={styles.roleBlock}>
                <View style={styles.roleHeader}>
                  <Text style={styles.roleTitle}>{role.title}</Text>
                  <Text style={styles.rolePeriod}>
                    {role.periodLabel}
                    {role.manager ? ` · ${role.manager.name} (${role.manager.title})` : ''}
                    {` (${calculateDuration(role.startDate, role.endDate)})`}
                  </Text>
                </View>
                {role.bullets.map((bullet, i) => (
                  <Text key={i} style={styles.bullet}>{`\u2022 ${bullet}`}</Text>
                ))}
              </View>
            ))}
          </View>
        ))}

        {/* Notable Wins */}
        <Text style={styles.sectionHeading}>Notable Wins</Text>
        <View style={styles.winsRow}>
          {notableWins.map((win) => (
            <View key={win.label} style={styles.winCard}>
              <Text style={styles.winNumber}>{win.number}</Text>
              <Text style={styles.winLabel}>{win.label}</Text>
              <Text style={styles.winSub}>{win.sub}</Text>
            </View>
          ))}
        </View>

        {/* Tools */}
        <Text style={styles.sectionHeading}>Tools</Text>
        {tools.map((tool) => (
          <View key={tool.category} style={styles.toolRow}>
            <Text style={styles.toolCategory}>{tool.category}</Text>
            <Text style={styles.toolItems}>{tool.items.join(' · ')}</Text>
          </View>
        ))}

      </Page>
    </Document>
  );
}
