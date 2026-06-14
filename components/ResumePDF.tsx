'use client';

import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { experience, notableWins, tools } from '@/lib/experienceData';
import { calculateCompanyDuration, calculateTotalExperience } from '@/lib/calculateDuration';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 36,
    paddingRight: 36,
    color: '#1A1A1A',
  },

  // ── Header ──────────────────────────────────────────
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
  },
  titleText: {
    fontSize: 12,
    color: '#3730A3',
    marginTop: 2,
  },
  contactLine: {
    fontSize: 9,
    color: '#6B7280',
    marginTop: 4,
  },
  headerRule: {
    height: 2,
    backgroundColor: '#3730A3',
    marginTop: 10,
    marginBottom: 14,
  },

  // ── Summary ─────────────────────────────────────────
  summary: {
    fontSize: 10,
    color: '#2D2D2D',
    lineHeight: 1.5,
    marginBottom: 18,
  },

  // ── Section headings ────────────────────────────────
  sectionHeading: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: '#3730A3',
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingBottom: 4,
    marginTop: 18,
    marginBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: '#C7D2FE',
    borderBottomStyle: 'solid',
  },

  // ── Company ─────────────────────────────────────────
  companyBlock: {
    marginBottom: 12,
  },
  companySeparator: {
    height: 0.5,
    backgroundColor: '#E5E3DC',
    marginTop: 8,
    marginBottom: 8,
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  companyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  companyName: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginRight: 6,
  },
  companyTagPill: {
    fontSize: 7,
    color: '#3730A3',
    backgroundColor: '#EEF2FF',
    borderRadius: 3,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
  },
  companyRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyDates: {
    fontSize: 9,
    color: '#6B7280',
    marginRight: 5,
  },
  durationPill: {
    fontSize: 8,
    color: '#3730A3',
    backgroundColor: '#EEF2FF',
    borderRadius: 3,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
  },
  tagline: {
    fontSize: 9,
    fontFamily: 'Helvetica-Oblique',
    color: '#9CA3AF',
    marginTop: 2,
    marginBottom: 6,
  },

  // ── Role ────────────────────────────────────────────
  roleBlock: {
    marginTop: 6,
    marginBottom: 3,
  },
  roleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  roleTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    flex: 1,
    marginRight: 8,
  },
  roleMeta: {
    fontSize: 8,
    color: '#9CA3AF',
    flexShrink: 0,
  },
  bullet: {
    fontSize: 9,
    color: '#4A4744',
    lineHeight: 1.45,
    marginBottom: 2,
    marginLeft: 10,
  },

  // ── 2-column grid layout ─────────────────────────────
  twoColGrid: {
    flexDirection: 'row',
    marginTop: 2,
  },
  gridCol: {
    flex: 1,
  },
  gridColLeft: {
    marginRight: 8,
  },

  // ── Notable Wins ────────────────────────────────────
  winCard: {
    backgroundColor: '#F9F8FF',
    borderWidth: 0.5,
    borderColor: '#E5E3DC',
    borderStyle: 'solid',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  winNumber: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#3730A3',
  },
  winLabel: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginTop: 2,
  },
  winSub: {
    fontSize: 8,
    color: '#6B7280',
    lineHeight: 1.4,
    marginTop: 2,
  },

  // ── Tools ───────────────────────────────────────────
  toolCard: {
    backgroundColor: '#FAFAFA',
    borderWidth: 0.5,
    borderColor: '#E5E3DC',
    borderStyle: 'solid',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  toolCategory: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#3730A3',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  toolItems: {
    fontSize: 9,
    color: '#2D2D2D',
    marginTop: 3,
  },
});

const totalYears = calculateTotalExperience('2015-06');

// Split an array into two columns (left = even indices, right = odd indices)
function splitColumns<T>(arr: T[]): [T[], T[]] {
  return [arr.filter((_, i) => i % 2 === 0), arr.filter((_, i) => i % 2 === 1)];
}

export default function ResumePDF() {
  const [winsLeft, winsRight] = splitColumns(notableWins);
  const [toolsLeft, toolsRight] = splitColumns(tools);

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* ── Header ── */}
        <Text style={styles.name}>Manan Sachdeva</Text>
        <Text style={styles.titleText}>Seller, Coach</Text>
        <Text style={styles.contactLine}>
          manan.sachdeva89@gmail.com  |  +91-9582006876  |  linkedin.com/in/manansachdeva
        </Text>
        <View style={styles.headerRule} />

        {/* ── Summary ── */}
        <Text style={styles.summary}>
          {`Sales leader with ${totalYears} years of experience building revenue functions at SaaS startups - from individual contributor to Head of Sales and Customer Success. Skilled in complex enterprise deals, team building, and scaling go-to-market functions from 0 to 1.`}
        </Text>

        {/* ── Experience ── */}
        <Text style={styles.sectionHeading}>Experience</Text>
        {experience.map((company, ci) => {
          const duration = calculateCompanyDuration(company.roles);
          return (
            <View key={company.name} wrap={false}>
              {ci > 0 && <View style={styles.companySeparator} />}
              <View style={styles.companyBlock}>
                <View style={styles.companyHeader}>
                  <View style={styles.companyLeft}>
                    <Text style={styles.companyName}>{company.name}</Text>
                    {company.tag && (
                      <Text style={styles.companyTagPill}>{company.tag.label}</Text>
                    )}
                  </View>
                  <View style={styles.companyRight}>
                    <Text style={styles.companyDates}>{company.dates}</Text>
                    {duration && <Text style={styles.durationPill}>{duration}</Text>}
                  </View>
                </View>

                {company.tagline && (
                  <Text style={styles.tagline}>{company.tagline}</Text>
                )}

                {company.roles.map((role) => (
                  <View key={role.title} style={styles.roleBlock}>
                    <View style={styles.roleHeader}>
                      <Text style={styles.roleTitle}>{role.title}</Text>
                      <Text style={styles.roleMeta}>
                        {role.periodLabel}
                        {role.manager ? `  ·  ${role.manager.name} (${role.manager.title})` : ''}
                      </Text>
                    </View>
                    {role.bullets.map((bullet, i) => (
                      <Text key={i} style={styles.bullet}>{`\u2022  ${bullet}`}</Text>
                    ))}
                  </View>
                ))}
              </View>
            </View>
          );
        })}

        {/* ── Track Record ── */}
        <Text style={styles.sectionHeading}>Track Record</Text>
        <View style={styles.twoColGrid} wrap={false}>
          <View style={[styles.gridCol, styles.gridColLeft]}>
            {winsLeft.map((win) => (
              <View key={win.label} style={styles.winCard}>
                <Text style={styles.winNumber}>{win.number}</Text>
                <Text style={styles.winLabel}>{win.label}</Text>
                <Text style={styles.winSub}>{win.sub}</Text>
              </View>
            ))}
          </View>
          <View style={styles.gridCol}>
            {winsRight.map((win) => (
              <View key={win.label} style={styles.winCard}>
                <Text style={styles.winNumber}>{win.number}</Text>
                <Text style={styles.winLabel}>{win.label}</Text>
                <Text style={styles.winSub}>{win.sub}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── Tools ── */}
        <Text style={styles.sectionHeading}>Tools</Text>
        <View style={styles.twoColGrid} wrap={false}>
          <View style={[styles.gridCol, styles.gridColLeft]}>
            {toolsLeft.map((tool) => (
              <View key={tool.category} style={styles.toolCard}>
                <Text style={styles.toolCategory}>{tool.category}</Text>
                <Text style={styles.toolItems}>{tool.items.join('  ·  ')}</Text>
              </View>
            ))}
          </View>
          <View style={styles.gridCol}>
            {toolsRight.map((tool) => (
              <View key={tool.category} style={styles.toolCard}>
                <Text style={styles.toolCategory}>{tool.category}</Text>
                <Text style={styles.toolItems}>{tool.items.join('  ·  ')}</Text>
              </View>
            ))}
          </View>
        </View>

      </Page>
    </Document>
  );
}
